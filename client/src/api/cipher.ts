import { aes } from '@medzik/libcrypto';

import { Client } from '../client';

const API_ENDPOINT = '/api/cipher';

export class CipherClient {
    private client: Client;

    constructor(apiUrl: string, apiToken: string) {
        this.client = new Client(apiToken, apiUrl);
    }

    public async insert(cipher: EncryptedCipher): Promise<InsertResponse> {
        return this.client.put(API_ENDPOINT, cipher);
    }

    public async update(cipher: EncryptedCipher) {
        return this.client.patch(`${API_ENDPOINT}/${cipher.id}`, cipher);
    }

    public async get(id: string): Promise<EncryptedCipher> {
        const response = await this.client.get(`${API_ENDPOINT}/${id}`);
        // fill cipher with default values if they are not set
        response.forEach(this.fillCipher);

        return response;
    }

    public async getAll(): Promise<EncryptedCipher[]> {
        const response = await this.client.get(API_ENDPOINT);
        // fill cipher with default values if they are not set
        response.forEach(this.fillCipher);

        return response;
    }

    public async delete(id: string) {
        return this.client.delete(`${API_ENDPOINT}/${id}`);
    }

    private fillCipher(cipher: EncryptedCipher): EncryptedCipher {
        if (cipher.type === undefined) {
            cipher.type = 0;
        }

        if (cipher.favorite === undefined) {
            cipher.favorite = false;
        }

        if (cipher.rePrompt === undefined) {
            cipher.rePrompt = false;
        }

        if (cipher.version === undefined) {
            cipher.version = 1;
        }

        return cipher;
    }
}

/**
 * EncryptedCipher is a representation of cipher stored in the database.
 * The data is encrypted and can only be decrypted with the encryption key.
 * @property id cipher identifier
 * @property owner owner identifier
 * @property type type of the cipher
 * @property protectedData encrypted cipher data
 * @property collection unique identifier of the collection the cipher belongs to
 * @property favorite Whether the cipher is marked as favorite
 * @property rePrompt Whether the password should be re-prompted (Only UI-related)
 * @property version version of the cipher (Currently 1)
 * @property created date the cipher was created
 * @property lastModified date the cipher was last modified
 * @see Cipher
 */
export interface EncryptedCipher {
    id: string;
    owner: string;
    type: number;
    protectedData: string;
    collection?: string;
    favorite: boolean;
    rePrompt: boolean;
    version: number;
    created?: Date;
    lastModified?: Date;
}

/**
 * Cipher is a representation of a single cipher entry.
 * @property id cipher identifier
 * @property owner owner identifier
 * @property type cipher type - [CipherType]
 * @property loginData login data (Only if the cipher is a login cipher) - [CipherLoginData]
 * @property secureNoteData secure note data (Only if the cipher is a secure cipher) - [CipherSecureNoteData]
 * @property cardData card data (Only if the cipher is a card cipher) - [CipherCardData]
 * @property collection collection identifier
 * @property favorite whether the cipher is a favorite cipher
 * @property rePrompt whether the cipher should be re-prompted (Only UI feature)
 * @property version cipher version (Current version is 1)
 * @property created created date
 * @property lastModified last modified date
 */
export class Cipher {
    id: string;
    owner: string;
    type: CipherType;
    loginData?: CipherLoginData;
    secureNoteData?: CipherSecureNoteData;
    cardData?: CipherCardData;
    collection?: string;
    favorite = false;
    rePrompt = false;
    version = 1;
    created?: Date;
    lastModified?: Date;

    constructor(id: string, owner: string, type: CipherType) {
        this.id = id;
        this.owner = owner;
        this.type = type;
    }

    /**
     * Creates a new [Cipher] from [EncryptedCipher].
     * @param encryptedCipher encrypted cipher
     * @param secretKey secret key used to decrypt the cipher
     */
    public static fromEncryptedCipher(encryptedCipher: EncryptedCipher, secretKey: string): Cipher {
        const cipher = new Cipher(encryptedCipher.id, encryptedCipher.owner, encryptedCipher.type);
        cipher.collection = encryptedCipher.collection;
        cipher.favorite = encryptedCipher.favorite;
        cipher.rePrompt = encryptedCipher.rePrompt;
        cipher.version = encryptedCipher.version;
        cipher.created = encryptedCipher.created;
        cipher.lastModified = encryptedCipher.lastModified;

        // decrypt the cipher data
        const cipherData = JSON.parse(aes.decryptAesGcm(secretKey, encryptedCipher.protectedData));

        // set the cipher data based on the cipher type
        switch (cipher.type) {
            case CipherType.Login:
                cipher.loginData = cipherData;
                break;
            case CipherType.SecureNote:
                cipher.secureNoteData = cipherData;
                break;
            case CipherType.Card:
                cipher.cardData = cipherData;
                break;
        }

        return cipher;
    }

    /**
     * Creates a new [EncryptedCipher] from [Cipher].
     * @param secretKey secret key used to encrypt the cipher
     */
    public toEncryptedCipher(secretKey: string): EncryptedCipher {
        return {
            id: this.id,
            owner: this.owner,
            type: this.type,
            collection: this.collection,
            favorite: this.favorite,
            rePrompt: this.rePrompt,
            version: this.version,
            created: this.created,
            lastModified: this.lastModified,
            protectedData: aes.encryptAesGcm(secretKey, JSON.stringify(this.getCipherData()))
        };
    }

    private getCipherData(): CipherLoginData | CipherSecureNoteData | CipherCardData {
        switch (this.type) {
            case CipherType.Login:
                return this.loginData!;
            case CipherType.SecureNote:
                return this.secureNoteData!;
            case CipherType.Card:
                return this.cardData!;
        }
    }
}

/**
 * CipherType is an enum class that represents the type of cipher.
 */
export enum CipherType {
    Login,
    SecureNote,
    Card
}

/**
 * Login data for cipher.
 * @property name cipher name
 * @property username login username
 * @property password login password
 * @property passwordHistory password history
 * @property uris list of URIs
 * @property twoFactor two-factor authentication secret
 * @property notes notes for the cipher
 * @property fields custom fields
 */
export interface CipherLoginData {
    name: string;
    username?: string;
    password?: string;
    passwordHistory?: PasswordHistory[];
    uris?: string[];
    twoFactor?: string;
    notes?: string;
    fields?: CustomField[];
}

/**
 * Passwords history in [CipherLoginData].
 * @param password login password
 * @param lastUsed date when the password was changed
 */
export interface PasswordHistory {
    password: string;
    lastUsed: Date;
}

/**
 * Secure note for the cipher.
 * @param title title of the note
 * @param note secure note
 * @param fields custom fields
 */
export interface CipherSecureNoteData {
    title: string;
    note: string;
    fields: CustomField[];
}

/**
 * Card data for cipher.
 * @param name cipher name
 * @param cardholderName cardholder name
 * @param number card number
 * @param expMonth card expiration month
 * @param expYear card expiration year
 * @param code CVV card code
 * @param notes notes for card
 * @param fields custom fields
 */
export interface CipherCardData {
    name: string;
    cardholderName: string;
    number: string;
    expMonth?: number;
    expYear?: number;
    code?: string;
    notes?: string;
    fields?: CustomField[];
}

/**
 * CipherField is a representation of a custom field of a cipher.
 * @property name field name
 * @property type field type
 * @property value value of the field
 * @see CipherFieldType
 */
export interface CustomField {
    name: string;
    type: CipherFieldType;
    value: string;
}

/**
 * CipherFieldType is an enum class that represents the type of custom field.
 */
export enum CipherFieldType {
    Text,
    Hidden
}

export type InsertResponse = {
    id: string;
};
