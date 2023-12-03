<script lang="ts">
    import {
        type Cipher,
        type CipherCardData,
        type CipherLoginData,
        type CipherSecureNoteData,
        CipherType    } from '@librepass/client';

    export let cipher: Cipher;
    let cipherClone = Object.assign({}, cipher);

    // @ts-ignore
    let loginData: CipherLoginData = cipherClone.loginData;
    // @ts-ignore
    let secureNoteData: CipherSecureNoteData = cipherClone.secureNoteData;
    // @ts-ignore
    let cardData: CipherCardData = cipherClone.cardData;
</script>

<!-- <h3 class="font-bold text-lg">{cipherDataClone.name}</h3> -->

<div class="form-control py-4">
    {#if cipherClone.type == CipherType.Login}
        <div class="w-full">
            <span class="label-text">Name</span>
            <input class="input input-bordered w-full" bind:value={loginData.name} readonly />
        </div>

        <div class="w-full">
            <span class="label-text">Username</span>
            <input class="input input-bordered w-full" bind:value={loginData.username} readonly />
        </div>

        <div>
            <span class="label-text">Password</span>
            <input class="input input-bordered w-full" bind:value={loginData.password} readonly />
            <!-- TODO: show/hide switch -->
        </div>

        <div>
            <span class="label-text">Notes</span>
            <textarea class="textarea textarea-bordered w-full" bind:value={loginData.notes} readonly />
        </div>
    {:else if cipher.type == CipherType.SecureNote}
        <div class="w-full">
            <span class="label-text">Title</span>
            <input class="input input-bordered w-full" bind:value={secureNoteData.title} readonly />
        </div>

        <div>
            <span class="label-text">Note</span>
            <textarea class="textarea textarea-bordered w-full" bind:value={secureNoteData.note} readonly />
        </div>
    {:else if cipher.type == CipherType.Card}
        <div class="w-full">
            <span class="label-text">Name</span>
            <input class="input input-bordered w-full" bind:value={cardData.name} readonly />
        </div>

        <div class="w-full">
            <span class="label-text">Cardholder name</span>
            <input class="input input-bordered w-full" bind:value={cardData.cardholderName} readonly />
        </div>

        <div class="w-full">
            <span class="label-text">Number</span>
            <input class="input input-bordered w-full" bind:value={cardData.number} readonly />
        </div>

        <div class="w-full">
            <span class="label-text">Expiration month</span>
            <input class="input input-bordered w-full" bind:value={cardData.expMonth} readonly />
        </div>

        <div class="w-full">
            <span class="label-text">Expiration year</span>
            <input class="input input-bordered w-full" bind:value={cardData.expYear} readonly />
        </div>

        <div class="w-full">
            <span class="label-text">Secure code</span>
            <input class="input input-bordered w-full" bind:value={cardData.code} readonly />
        </div>

        <div>
            <span class="label-text">Notes</span>
            <textarea class="textarea textarea-bordered w-full" bind:value={cardData.notes} readonly />
        </div>
    {/if}
</div>
