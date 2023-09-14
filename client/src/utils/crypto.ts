import { argon2, curve25519 } from '@medzik/libcrypto';

export const DefaultArgon2idParameters = {
    parallelism: 3,
    memory: 65536, // 64MB
    iterations: 4
};

export function generateKeyPair() {
    return curve25519.generateKeyPair();
}

export function computeSecretKey(privateKey: string, publicKey: string) {
    return curve25519.computeSharedSecret(privateKey, publicKey);
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

export const computeSharedSecret = curve25519.computeSharedSecret;
export const recoverPublicKey = curve25519.recoverPublicKey;
