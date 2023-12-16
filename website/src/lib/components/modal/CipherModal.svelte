<script lang="ts">
    import {
        type Cipher,
        type CipherCardData,
        CipherClient,
        type CipherLoginData,
        type CipherSecureNoteData,
        CipherType
    } from '@librepass/client';
    import { modalStore } from '@medzik/svelte-utils';

    import { authStore, secretsStore } from '$lib/storage';
    import { PUBLIC_API_URL } from '$env/static/public';

    export let cipher: Cipher;
    let cipherClone = Object.assign({}, cipher);

    // @ts-ignore
    let loginData: CipherLoginData = cipherClone.loginData;
    // @ts-ignore
    let secureNoteData: CipherSecureNoteData = cipherClone.secureNoteData;
    // @ts-ignore
    let cardData: CipherCardData = cipherClone.cardData;

    function save() {
        const secrets = secretsStore.get();

        const auth = authStore.get()!;
        const cipherClient = new CipherClient(PUBLIC_API_URL, auth.apiKey);

        const encryptedCipher = cipher.toEncryptedCipher(secrets.sharedSecret);
        cipherClient.update(encryptedCipher);

        modalStore.close();
    }
</script>

<h3 class="font-bold text-lg">
    {#if cipherClone.type == CipherType.Login}
        {loginData.name}
    {:else if cipherClone.type == CipherType.SecureNote}
        {secureNoteData.title}
    {:else if cipherClone.type == CipherType.Card}
        {cardData.name}
    {/if}
</h3>

<div class="form-control py-4">
    {#if cipherClone.type == CipherType.Login}
        <div class="w-full">
            <span class="label-text">Name</span>
            <input class="input input-bordered w-full" bind:value={loginData.name} />
        </div>

        <div class="w-full">
            <span class="label-text">Username</span>
            <input class="input input-bordered w-full" bind:value={loginData.username} />
        </div>

        <div>
            <span class="label-text">Password</span>
            <input class="input input-bordered w-full" bind:value={loginData.password} />
            <!-- TODO: show/hide switch -->
            <!-- TODO: Password Generator -->
        </div>

        <div>
            <span class="label-text">Notes</span>
            <textarea class="textarea textarea-bordered w-full" bind:value={loginData.notes} />
        </div>
    {:else if cipher.type == CipherType.SecureNote}
        <div class="w-full">
            <span class="label-text">Title</span>
            <input class="input input-bordered w-full" bind:value={secureNoteData.title} />
        </div>

        <div>
            <span class="label-text">Note</span>
            <textarea class="textarea textarea-bordered w-full" bind:value={secureNoteData.note} />
        </div>
    {:else if cipher.type == CipherType.Card}
        <div class="w-full">
            <span class="label-text">Name</span>
            <input class="input input-bordered w-full" bind:value={cardData.name} />
        </div>

        <div class="w-full">
            <span class="label-text">Cardholder name</span>
            <input class="input input-bordered w-full" bind:value={cardData.cardholderName} />
        </div>

        <div class="w-full">
            <span class="label-text">Number</span>
            <input class="input input-bordered w-full" bind:value={cardData.number} />
        </div>

        <div class="w-full">
            <span class="label-text">Expiration month</span>
            <input class="input input-bordered w-full" bind:value={cardData.expMonth} />
        </div>

        <div class="w-full">
            <span class="label-text">Expiration year</span>
            <input class="input input-bordered w-full" bind:value={cardData.expYear} />
        </div>

        <div class="w-full">
            <span class="label-text">Secure code</span>
            <input class="input input-bordered w-full" bind:value={cardData.code} />
        </div>

        <div>
            <span class="label-text">Notes</span>
            <textarea class="textarea textarea-bordered w-full" bind:value={cardData.notes} />
        </div>
    {/if}
</div>

<div class="text-center">
    <button class="btn btn-primary" on:click={save}> Save </button>
</div>
