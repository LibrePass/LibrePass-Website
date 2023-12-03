import { x25519 } from '@medzik/libcrypto';

import { Client } from '../client';
import { computePasswordHash, DefaultArgon2idParameters } from '../utils/crypto';

export class AuthClient {
    private client: Client;

    private API_ENDPOINT = '/api/auth';

    constructor(apiUrl: string) {
        this.client = new Client(undefined, apiUrl);
    }

    public async register(email: string, password: string, passwordHint: string) {
        const preLogin = await this.preLogin('');

        const privateKey = await computePasswordHash(password, email, preLogin);
        const publicKey = x25519.publicFromPrivate(privateKey);

        const sharedKey = x25519.computeSharedSecret(privateKey, preLogin.serverPublicKey);

        return await this.client.post(`${this.API_ENDPOINT}/register`, {
            email,
            passwordHint: passwordHint,
            sharedKey,
            // Argon2id parameters
            parallelism: DefaultArgon2idParameters.parallelism,
            memory: DefaultArgon2idParameters.memory,
            iterations: DefaultArgon2idParameters.iterations,
            // X25519 keypair
            publicKey: publicKey
        });
    }

    public async preLogin(email: string) {
        return await this.client.get<PreLoginResponse>(`${this.API_ENDPOINT}/preLogin?email=${email}`);
    }

    public async login(email: string, password: string) {
        const preLogin = await this.preLogin(email);

        const privateKey = await computePasswordHash(password, email, preLogin);
        const publicKey = x25519.publicFromPrivate(privateKey);

        const sharedKey = x25519.computeSharedSecret(privateKey, preLogin.serverPublicKey);

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

type PreLoginResponse = {
    parallelism: number;
    memory: number;
    iterations: number;
    version: number;
    serverPublicKey: string;
};

type UserCredentials = {
    userId: string;
    apiKey: string;
    publicKey: string;
};
