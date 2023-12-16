<script lang="ts">
    export let closeModal: () => void;

    import { _ } from 'svelte-i18n';
    import {
        type Cipher,
        type CipherCardData,
        CipherClient,
        type CipherLoginData,
        type CipherSecureNoteData,
        CipherType
    } from '@librepass/client';

    import { authStore, secretsStore } from '$lib/storage';
    import { PUBLIC_API_URL } from '$env/static/public';

    export let cipher: Cipher;

    function clone(object: any): any {
        if (!object) return undefined;
        return Object.assign(Object.create(Object.getPrototypeOf(object)), object);
    }

    let loginData: CipherLoginData = clone(cipher.loginData);
    let secureNoteData: CipherSecureNoteData = clone(cipher.secureNoteData);
    let cardData: CipherCardData = clone(cipher.cardData);

    function save() {
        const secrets = secretsStore.get();

        const auth = authStore.get()!;
        const cipherClient = new CipherClient(PUBLIC_API_URL, auth.apiKey);

        if (cipher.type == CipherType.Login) {
            cipher.loginData = loginData;
        } else if (cipher.type == CipherType.SecureNote) {
            cipher.secureNoteData = secureNoteData;
        } else if (cipher.type == CipherType.Card) {
            cipher.cardData = cardData;
        }

        const encryptedCipher = cipher.toEncryptedCipher(secrets.sharedSecret);
        cipherClient.update(encryptedCipher);

        closeModal();
    }
</script>

<h3 class="font-bold text-lg">
    {#if cipher.type == CipherType.Login}
        {loginData.name}
    {:else if cipher.type == CipherType.SecureNote}
        {secureNoteData.title}
    {:else if cipher.type == CipherType.Card}
        {cardData.name}
    {/if}
</h3>

<div class="form-control py-4">
    {#if cipher.type == CipherType.Login}
        <div class="w-full">
            <span class="label-text">
                {$_('field.name')}
            </span>
            <input class="input input-bordered w-full" bind:value={loginData.name} />
        </div>

        <div class="w-full">
            <span class="label-text">
                {$_('field.username')}
            </span>
            <input class="input input-bordered w-full" bind:value={loginData.username} />
        </div>

        <div>
            <span class="label-text">
                {$_('field.password')}
            </span>
            <input class="input input-bordered w-full" bind:value={loginData.password} />
            <!-- TODO: show/hide switch -->
            <!-- TODO: Password Generator -->
        </div>

        <div>
            <span class="label-text">
                {$_('field.notes')}
            </span>
            <textarea class="textarea textarea-bordered w-full" bind:value={loginData.notes} />
        </div>
    {:else if cipher.type == CipherType.SecureNote}
        <div class="w-full">
            <span class="label-text">
                {$_('field.title')}
            </span>
            <input class="input input-bordered w-full" bind:value={secureNoteData.title} />
        </div>

        <div>
            <span class="label-text">
                {$_('field.notes')}
            </span>
            <textarea class="textarea textarea-bordered w-full" bind:value={secureNoteData.note} />
        </div>
    {:else if cipher.type == CipherType.Card}
        <div class="w-full">
            <span class="label-text">
                {$_('field.name')}
            </span>
            <input class="input input-bordered w-full" bind:value={cardData.name} />
        </div>

        <div class="w-full">
            <span class="label-text">
                {$_('field.cardholderName')}
            </span>
            <input class="input input-bordered w-full" bind:value={cardData.cardholderName} />
        </div>

        <div class="w-full">
            <span class="label-text">
                {$_('field.number')}
            </span>
            <input class="input input-bordered w-full" bind:value={cardData.number} />
        </div>

        <div class="w-full">
            <span class="label-text">
                {$_('field.expirationMonth')}
            </span>
            <input class="input input-bordered w-full" bind:value={cardData.expMonth} />
        </div>

        <div class="w-full">
            <span class="label-text">
                {$_('field.expirationYear')}
            </span>
            <input class="input input-bordered w-full" bind:value={cardData.expYear} />
        </div>

        <div class="w-full">
            <span class="label-text">
                {$_('field.secureCode')}
            </span>
            <input class="input input-bordered w-full" bind:value={cardData.code} />
        </div>

        <div>
            <span class="label-text">
                {$_('field.notes')}
            </span>
            <textarea class="textarea textarea-bordered w-full" bind:value={cardData.notes} />
        </div>
    {/if}
</div>

<div class="text-center">
    <button class="btn btn-primary" on:click={save}>
        {$_('page.vault.modal.save')}
    </button>
</div>
