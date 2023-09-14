export * as authStore from './auth';
export * as secretsStore from './secrets';

export type StorageType = 'local' | 'session';

export function getStorage(type: StorageType) {
    return type === 'local' ? localStorage : sessionStorage;
}
