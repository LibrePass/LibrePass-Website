<script lang="ts">
    import { API_URL } from '$lib';
    import { authStore, secretsStore } from '$lib/storage';
    import {
        CipherType,
        type Cipher,
        type CipherSecureNoteData,
        type CipherLoginData,
        type CipherCardData,
        CipherClient
    } from '@librepass/client';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import { _ } from 'svelte-i18n';

    export let cipher: Cipher;

    function clone(object: any): any {
        if (!object) return undefined;
        return Object.assign(Object.create(Object.getPrototypeOf(object)), object);
    }

    let loginData: CipherLoginData = clone(cipher.loginData);
    let secureNoteData: CipherSecureNoteData = clone(cipher.secureNoteData);
    let cardData: CipherCardData = clone(cipher.cardData);

    // @ts-expect-error: Other type never happends
    function getName(cipher: Cipher): string {
        if (cipher.type == CipherType.Login) {
            return cipher.loginData!.name;
        } else if (cipher.type == CipherType.SecureNote) {
            return cipher.secureNoteData!.title;
        } else if (cipher.type == CipherType.Card) {
            return cipher.cardData!.name;
        }
    }

    const modalStore = getModalStore();

    function cancel() {
        modalStore.close();
    }

    async function save() {
        const secrets = secretsStore.get();

        const auth = authStore.get()!;
        const cipherClient = new CipherClient(API_URL, auth.apiKey);

        if (cipher.type == CipherType.Login) {
            cipher.loginData = loginData;
        } else if (cipher.type == CipherType.SecureNote) {
            cipher.secureNoteData = secureNoteData;
        } else if (cipher.type == CipherType.Card) {
            cipher.cardData = cardData;
        }

        const encryptedCipher = cipher.toEncryptedCipher(secrets.sharedSecret);
        cipherClient.update(encryptedCipher);

        modalStore.close();
    }
</script>

<div
    class="modal block overflow-y-auto bg-surface-100-800-token w-modal h-auto p-4 space-y-4 rounded-container-token shadow-xl"
    role="dialog"
>
    <header class="modal-header text-2xl font-bold px-2">
        {getName(cipher)}
    </header>

    <article class="modal-body max-h-[50vh] overflow-scroll space-y-2 px-2">
        {#if cipher.type == CipherType.Login}
            <label class="label">
                <span>${$_('field.email')}</span>
                <input class="input input-bordered w-full" bind:value={loginData.name} />
            </label>

            <label class="label">
                <span>$_('field.username')</span>
                <input class="input input-bordered w-full" bind:value={loginData.username} />
            </label>

            <label class="label">
                <span>$_('field.password')</span>
                <input class="input input-bordered w-full" bind:value={loginData.password} />
            </label>

            <label class="label">
                <span>$_('field.notes')</span>
                <textarea class="textarea textarea-bordered w-full" bind:value={loginData.notes} />
            </label>
        {:else if cipher.type == CipherType.SecureNote}
            <label class="label">
                <span>$_('field.title')</span>
                <input class="input input-bordered w-full" bind:value={secureNoteData.title} />
            </label>

            <label class="label">
                <span>$_('field.notes')</span>
                <textarea class="textarea textarea-bordered w-full" bind:value={secureNoteData.note} />
            </label>
        {:else if cipher.type == CipherType.Card}
            <label class="label">
                <span>$_('field.name')</span>
                <input class="input input-bordered w-full" bind:value={cardData.name} />
            </label>

            <label class="label">
                <span>$_('field.cardholder_name')</span>
                <input class="input input-bordered w-full" bind:value={cardData.cardholderName} />
            </label>

            <div class="flex gap-2">
                <label class="label">
                    <span>$_('field.exp_month')</span>
                    <input class="input input-bordered w-full" bind:value={cardData.expMonth} />
                </label>

                <label class="label">
                    <span>$_('field.exo_year')</span>
                    <input class="input input-bordered w-full" bind:value={cardData.expYear} />
                </label>
            </div>

            <label class="label">
                <span>$_('field.secure_code')</span>
                <input class="input input-bordered w-full" bind:value={cardData.code} />
            </label>

            <label class="label">
                <span>$_('field.notes')</span>
                <textarea class="textarea textarea-bordered w-full" bind:value={cardData.notes} />
            </label>
        {/if}
    </article>

    <footer class="modal-footer flex justify-end space-x-2">
        <button class="btn variant-filled-surface" on:click={cancel}>
            $_('btn.cancel')
        </button>

        <button class="btn variant-filled-primary" on:click={save}>
            $_('btn.save')
        </button>
    </footer>
</div>
