import { argon2, x25519 } from '@medzik/libcrypto';

export const DefaultArgon2idParameters = {
    parallelism: 3,
    memory: 65536, // 64MB
    iterations: 4
};

export function generateKeyPair() {
    return x25519.generateKeyPair();
}

export function computeSecretKey(privateKey: string, publicKey: string) {
    return x25519.computeSharedSecret(privateKey, publicKey);
}

export async function computePasswordHash(password: string, email: string, parameters = DefaultArgon2idParameters) {
    return argon2.ID({
        hashLength: 32,
        parallelism: parameters.parallelism,
        memorySize: parameters.memory,
        iterations: parameters.iterations,
        password: password,
        salt: email,
        outputType: 'hex'
    });
}

export const computeSharedSecret = x25519.computeSharedSecret;
export const publicFromPrivate = x25519.publicFromPrivate;
