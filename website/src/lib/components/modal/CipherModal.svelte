<script lang="ts">
    import type { Cipher } from '@librepass/client';

    export let cipher: Cipher;
    let cipherData = cipher.loginData!;

    let cipherDataClone = Object.assign({}, cipherData);
</script>

<h3 class="font-bold text-lg">{cipherDataClone.name}</h3>

<div class="form-control py-4">
    <div class="w-full">
        <span class="label-text">Name</span>
        <input class="input input-bordered w-full" bind:value={cipherDataClone.name} readonly />
    </div>

    <div class="w-full">
        <span class="label-text">Username</span>
        <input class="input input-bordered w-full" bind:value={cipherDataClone.username} readonly />
    </div>

    <div>
        <span class="label-text">Password</span>
        <input class="input input-bordered w-full" bind:value={cipherDataClone.password} readonly />
        <!-- TODO: show/hide switch -->
    </div>

    <div>
        <span class="label-text">Notes</span>
        <textarea class="textarea textarea-bordered w-full" bind:value={cipherDataClone.notes} readonly />
    </div>
</div>
