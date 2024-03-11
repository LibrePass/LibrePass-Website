<script lang="ts">
    import { CipherType, type Cipher, type CipherSecureNoteData, type CipherLoginData, type CipherCardData } from '@librepass/client';
    import { getModalStore } from '@skeletonlabs/skeleton';

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

    async function save() {
        modalStore.close()
    }
</script>

<div class="modal block overflow-y-auto bg-surface-100-800-token w-modal h-auto p-4 space-y-4 rounded-container-token shadow-xl" role="dialog">
    <header class="modal-header text-2xl font-bold px-2">
        {getName(cipher)}
    </header>

    <article class="modal-body max-h-[50vh] overflow-scroll space-y-2 px-2">
        {#if cipher.type == CipherType.Login}
            <label class="label">
                <span>Name</span>
                <input class="input input-bordered w-full" bind:value={loginData.name} />
            </label>

            <label class="label">
                <span>Username</span>
                <input class="input input-bordered w-full" bind:value={loginData.username} />
            </label>

            <label class="label">
                <span>Password</span>
                <input class="input input-bordered w-full" bind:value={loginData.username} />
            </label>

            <label class="label">
                <span>Notes</span>
                <textarea class="textarea textarea-bordered w-full" bind:value={loginData.notes} />
            </label>
        {/if}
    </article> 

    <footer class="modal-footer flex justify-end space-x-2">
        <button class="btn variant-filled-surface" on:click={save}>
            Cancel
        </button>

        <button class="btn variant-filled-primary" on:click={save}>
            Save
        </button>
    </footer>
</div>
