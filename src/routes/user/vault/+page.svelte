<script lang="ts">
    import { onMount } from 'svelte';
    import { Cipher, CipherClient, CipherType } from '@librepass/client';
    import {
        getModalStore,
        Table,
        tableMapperValues,
        type TableSource,

        Modal

    } from '@skeletonlabs/skeleton';

    import { API_URL } from '$lib';
    import Seo from '$lib/components/Seo.svelte';
    import { authStore, secretsStore } from '$lib/storage';
    import { goto } from '$app/navigation';
    import CipherModal from '$lib/components/modal/CipherModal.svelte';

    let secretKey: string;
    let cipherClient: CipherClient;

    let mounted = false;

    let tableCiphers: { cipher: Cipher; name: string; username?: string }[] = [];
    let table: TableSource = {
        head: ['Name', 'Username'],
        body: tableMapperValues(tableCiphers, ['name', 'username']),
        meta: tableMapperValues(tableCiphers, ['id'])
    };

    onMount(async () => {
        if (!secretsStore.exists()) {
            return await goto('/auth/login');
        }

        const secrets = secretsStore.get();
        secretKey = secrets.sharedSecret;

        const auth = authStore.get()!;
        cipherClient = new CipherClient(API_URL, auth.apiKey);

        const ciphers = await sync();

        ciphers.forEach((x) => {
            tableCiphers.push({
                cipher: x,
                name: getName(x),
                username: x.loginData?.username
            });
        });

        table = {
            head: ['Name', 'Username'],
            body: tableMapperValues(tableCiphers, ['name', 'username']),
            meta: tableMapperValues(tableCiphers, ['cipher'])
        };

        mounted = true;
    });

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

    async function sync(): Promise<Cipher[]> {
        const encryptedCiphers = await cipherClient.getAll();

        let tmpCiphers: Cipher[] = [];
        encryptedCiphers.forEach((encryptedCipher) => {
            const cipher = Cipher.fromEncryptedCipher(encryptedCipher, secretKey);
            tmpCiphers.push(cipher);
        });

        // sort ciphers by name
        tmpCiphers.sort((a, b) => {
            return getName(a).localeCompare(getName(b));
        });

        return tmpCiphers;
    }

    const modalStore = getModalStore();

    async function onSelected(x: CustomEvent<any[]>) {
        const cipher: Cipher = x.detail[0];

        console.log(cipher);

        modalStore.trigger({
            type: 'component',
            component: { 
                ref: CipherModal,
                props: {
                    cipher
                }
             }
        });
    }
</script>

<Modal />

<Seo title="Vault" />

<section class="md:container mx-auto p-0 md:p-5">
    {#if !mounted}
        <!-- Loading -->
    {:else}
        <Table source={table} interactive={true} on:selected={onSelected} />
    {/if}
</section>
