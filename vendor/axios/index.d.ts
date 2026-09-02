export interface AxiosRequestConfig<T = unknown> {
  url?: string;
  baseURL?: string;
  method?: string;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  data?: T;
  timeout?: number;
  signal?: AbortSignal;
  withCredentials?: boolean;
}

export interface AxiosResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: AxiosRequestConfig;
}

export interface AxiosInstance {
  <T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  request<T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: { use(onFulfilled: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>, onRejected?: (error: unknown) => unknown): number };
    response: { use(onFulfilled: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>, onRejected?: (error: unknown) => unknown): number };
  };
}

export class AxiosError extends Error {
  config?: AxiosRequestConfig;
  response?: AxiosResponse;
  status?: number;
}

export function create(config?: AxiosRequestConfig): AxiosInstance;
declare const axios: { create: typeof create; AxiosError: typeof AxiosError };
export default axios;
