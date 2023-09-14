/**
 * A client for the LibrePass API. This class handles all the requests to the API.
 */
export class Client {
    private readonly apiUrl: string;
    private readonly accessToken: string | undefined;

    /**
     * Create a new client. The access token is optional.
     * @param accessToken The access token to use for the requests
     * @param apiUrl The URL of the API (default: https://api.librepass.medzik.dev)
     */
    constructor(accessToken: string | undefined = undefined, apiUrl = 'https://api.librepass.medzik.dev') {
        this.apiUrl = apiUrl;
        this.accessToken = accessToken;
    }

    /**
     * Send a GET request to the API. Returns the JSON response.
     * @param path The path to send the request to (e.g. /users)
     * @returns The JSON response from the API
     */
    public async get<T = any>(path: string): Promise<T> {
        return await this.request('GET', path);
    }

    /**
     * Send a POST request to the API. Returns the JSON response.
     * @param path The path to send the request to (e.g. /users)
     * @param body The body of the request
     * @returns The JSON response from the API
     */
    public async post<T = any>(path: string, body: any): Promise<T> {
        return await this.request('POST', path, body);
    }

    /**
     * Send a PUT request to the API. Returns the JSON response.
     * @param path The path to send the request to (e.g. /users)
     * @param body The body of the request
     * @returns The JSON response from the API
     */
    public async put<T = any>(path: string, body: any): Promise<T> {
        return await this.request('PUT', path, body);
    }

    /**
     * Send a PATCH request to the API. Returns the JSON response.
     * @param path The path to send the request to (e.g. /users)
     * @param body The body of the request
     * @returns The JSON response from the API
     */
    public async patch<T = any>(path: string, body: any): Promise<T> {
        return await this.request('PATCH', path, body);
    }

    /**
     * Send a DELETE request to the API. Returns the JSON response.
     * @param path The path to send the request to (e.g. /users)
     * @returns The JSON response from the API
     */
    public async delete<T = any>(path: string): Promise<T> {
        return await this.request('DELETE', path);
    }

    /**
     * Send a request to the API. Returns the JSON response.
     * @param method The HTTP method to use
     * @param path The path to send the request to (e.g. /users)
     * @param body The body of the request
     */
    private async request(method: string, path: string, body?: any): Promise<any> {
        const headers: any = {
            'Content-Type': 'application/json'
        };

        // add the access token to the request if it exists
        if (this.accessToken) {
            headers['Authorization'] = `Bearer ${this.accessToken}`;
        }

        // make the request
        const response = await fetch(`${this.apiUrl}${path}`, {
            method,
            headers,
            body: JSON.stringify(body)
        });

        // if the response is 204 (No Content), return nothing
        if (response.status === 204) {
            return;
        }

        // parse the response as JSON
        const json = await response.json();

        // if the response was ok, return the JSON
        if (response.ok) {
            return json;
        }

        // otherwise, throw an error with the message
        throw new Error(JSON.stringify(json));
    }
}
