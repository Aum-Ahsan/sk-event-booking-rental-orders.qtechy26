import dev from './cjs/use-sync-external-store-with-selector.development.js';
import prod from './cjs/use-sync-external-store-with-selector.production.js';

const mod = process.env.NODE_ENV === 'production' ? prod : dev;
export const useSyncExternalStoreWithSelector = mod.useSyncExternalStoreWithSelector;
export default mod;
