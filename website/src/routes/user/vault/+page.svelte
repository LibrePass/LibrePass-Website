<script lang="ts">
    import { onMount } from 'svelte';
    import { Cipher, CipherClient } from '@librepass/client';

    import Seo from '$lib/components/Seo.svelte';
    import { authStore, secretsStore } from '$lib/storage';
    import { goto } from '$app/navigation';
    import { PUBLIC_API_URL } from '$env/static/public';

    let secretKey: string;
    let cipherClient: CipherClient;

    let mounted = false;

    let ciphers: Cipher[] = [];

    onMount(async () => {
        if (!secretsStore.exists()) {
            return await goto('/auth/login');
        }

        const secrets = secretsStore.get();
        secretKey = secrets.sharedSecret;

        const auth = authStore.get()!;
        cipherClient = new CipherClient(PUBLIC_API_URL, auth.apiKey);

        ciphers = await sync();

        mounted = true;
    });

    async function sync(): Promise<Cipher[]> {
        const encryptedCiphers = await cipherClient.getAll();

        let tmpCiphers: Cipher[] = [];
        encryptedCiphers.forEach((encryptedCipher) => {
            const cipher = Cipher.fromEncryptedCipher(encryptedCipher, secretKey);
            tmpCiphers.push(cipher);
        });

        // sort ciphers by name
        tmpCiphers.sort((a, b) => a.loginData!.name!.localeCompare(b.loginData!.name));

        return tmpCiphers;
    }
</script>

<Seo title="Vault" />

<div class="container flex flex-col overflow-x-auto">
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <!-- <th class="text-right">Actions</th> -->
            </tr>
        </thead>

        <tbody>
            {#if mounted}
                {#each ciphers as cipher}
                    <tr
                        class="cursor-pointer hover:bg-base-200/20 justify-center"
                        on:click={() => console.log('clicked')}
                    >
                        <th class="flex flex-col h-16 justify-center">
                            <span>{cipher.loginData?.name}</span>
                            <span class="text-xs text-base-content/75">{cipher.loginData?.username || ''}</span>
                        </th>

                        <!-- <th class="text-right">...</th> -->
                    </tr>
                {/each}
            {:else}
                <!-- '_' is defined but never used -->
                <!-- eslint-disable-next-line -->
                {#each { length: 4 } as _}
                    <tr class="cursor-pointer hover:bg-base-200/20" on:click={() => console.log('clicked')}>
                        <th class="flex h-16">
                            <span class="loading loading-infinity"></span>
                        </th>

                        <!-- <th class="text-right">...</th> -->
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>
