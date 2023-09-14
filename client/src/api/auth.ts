import { curve25519 } from "@medzik/libcrypto"

import { DefaultArgon2idParameters, computePasswordHash } from "../utils/crypto"
import { Client } from "../client"

export class AuthClient {
    private client = new Client()

    private API_ENDPOINT = '/api/auth';

    public async register(email: string, password: string, passwordHint: string) {
        const preLogin = await this.preLogin('');

        const privateKey = await computePasswordHash(password, email, preLogin);
        const publicKey = curve25519.recoverPublicKey(privateKey);

        const sharedKey = curve25519.computeSharedSecret(privateKey, preLogin.serverPublicKey);

        return await this.client.post(`${this.API_ENDPOINT}/register`, {
            email,
            passwordHint: passwordHint,
            sharedKey,
            // Argon2id parameters
            parallelism: DefaultArgon2idParameters.parallelism,
            memory: DefaultArgon2idParameters.memory,
            iterations: DefaultArgon2idParameters.iterations,
            // Curve25519 keypair
            publicKey: publicKey
        });
    }

    public async preLogin(email: string) {
        return await this.client.get<PreLoginResponse>(`${this.API_ENDPOINT}/preLogin?email=${email}`);
    }

    public async login(email: string, password: string) {
        const preLogin = await this.preLogin(email);

        const privateKey = await computePasswordHash(password, email, preLogin);
        const publicKey = curve25519.recoverPublicKey(privateKey);

        const sharedKey = curve25519.computeSharedSecret(privateKey, preLogin.serverPublicKey);

        const credentials = await this.client.post<UserCredentials>(`${this.API_ENDPOINT}/oauth?grantType=login`, {
            email,
            sharedKey
        });

        return {
            ...credentials,
            privateKey,
            publicKey
        };
    }
}

export type PreLoginResponse = {
    parallelism: number;
    memory: number;
    iterations: number;
    version: number;
    serverPublicKey: string;
};

export type UserCredentials = {
    userId: string;
    apiKey: string;
    publicKey: string;
};
