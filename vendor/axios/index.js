const mergeHeaders = (defaults = {}, overrides = {}) => ({ ...defaults, ...overrides });

class AxiosError extends Error {
  constructor(message, config, response) {
    super(message);
    this.name = "AxiosError";
    this.config = config;
    this.response = response;
    this.status = response?.status;
  }
}

const create = (defaults = {}) => {
  const requestInterceptors = [];
  const responseInterceptors = [];

  const request = async (config) => {
    let nextConfig = {
      method: "GET",
      ...defaults,
      ...config,
      headers: mergeHeaders(defaults.headers, config.headers),
    };
    for (const interceptor of requestInterceptors) {
      nextConfig = await interceptor.onFulfilled(nextConfig);
    }

    const baseURL = nextConfig.baseURL || "";
    const url = new URL(nextConfig.url, baseURL || globalThis.location?.origin || "http://localhost");
    if (nextConfig.params) {
      Object.entries(nextConfig.params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
      });
    }

    const controller = new AbortController();
    const timeout = nextConfig.timeout
      ? setTimeout(() => controller.abort(), nextConfig.timeout)
      : undefined;
    try {
      const response = await fetch(url, {
        method: nextConfig.method,
        headers: nextConfig.headers,
        body: nextConfig.data === undefined ? undefined : JSON.stringify(nextConfig.data),
        signal: nextConfig.signal || controller.signal,
        credentials: nextConfig.withCredentials ? "include" : "same-origin",
      });
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();
      let result = { data, status: response.status, statusText: response.statusText, headers: response.headers, config: nextConfig };
      if (!response.ok) throw new AxiosError(`Request failed with status code ${response.status}`, nextConfig, result);
      for (const interceptor of responseInterceptors) result = await interceptor.onFulfilled(result);
      return result;
    } catch (error) {
      let nextError = error;
      for (const interceptor of responseInterceptors) {
        if (interceptor.onRejected) nextError = await interceptor.onRejected(nextError);
      }
      throw nextError;
    } finally {
      if (timeout) clearTimeout(timeout);
    }
  };

  const instance = (config) => request(config);
  instance.request = request;
  instance.get = (url, config = {}) => request({ ...config, url, method: "GET" });
  instance.delete = (url, config = {}) => request({ ...config, url, method: "DELETE" });
  instance.post = (url, data, config = {}) => request({ ...config, url, data, method: "POST" });
  instance.put = (url, data, config = {}) => request({ ...config, url, data, method: "PUT" });
  instance.patch = (url, data, config = {}) => request({ ...config, url, data, method: "PATCH" });
  instance.defaults = defaults;
  instance.interceptors = {
    request: { use: (onFulfilled, onRejected) => requestInterceptors.push({ onFulfilled, onRejected }) - 1 },
    response: { use: (onFulfilled, onRejected) => responseInterceptors.push({ onFulfilled, onRejected }) - 1 },
  };
  return instance;
};

const axios = { create, AxiosError };
export { AxiosError, create };
export default axios;
