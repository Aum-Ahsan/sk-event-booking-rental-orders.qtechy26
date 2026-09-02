import dev from './cjs/use-sync-external-store.development.js';
import prod from './cjs/use-sync-external-store.production.js';

const mod = process.env.NODE_ENV === 'production' ? prod : dev;
export const useSyncExternalStore = mod.useSyncExternalStore;
export default mod;
