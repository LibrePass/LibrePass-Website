import { getStorage } from '.';

type SecretsStore = {
    privateKey: string;
    sharedSecret: string;
};

function getStore(): SecretsStore | undefined {
    return exists() ? JSON.parse(getStorage('session').secretsStore) : undefined;
}

export function get() {
    return getStore()!;
}

export function update(secrets: SecretsStore) {
    getStorage('session').secretsStore = JSON.stringify(secrets);
}

export function exists() {
    return getStorage('session').secretsStore != undefined;
}
