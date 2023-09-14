import { getStorage } from '.';

type AuthStore = {
    email: string;
    userId: string;
    apiKey: string;
    publicKey: string;
};

export function get(): AuthStore | undefined {
    return exists() ? JSON.parse(getStorage('local').authStore) : undefined;
}

export function update(credentials: AuthStore) {
    getStorage('local').authStore = JSON.stringify(credentials);
}

export function exists() {
    return getStorage('local').authStore != undefined;
}
