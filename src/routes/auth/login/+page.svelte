<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';
    import {
        AuthClient,
        computePasswordHash,
        computeSharedSecret,
        publicFromPrivate
    } from '@librepass/client';
    import { getToastStore } from '@skeletonlabs/skeleton';

    import { API_URL } from '$lib';
    import { authStore, secretsStore } from '$lib/storage';
    import { goto } from '$app/navigation';

    let field = {
        email: '',
        password: '',
        disabled: false
    };

    onMount(() => {
        if (secretsStore.exists()) {
            return goto('/user/vault');
        }

        if (authStore.exists()) {
            field.email = authStore.getNotNull().email;
        }
    });

    const authClient = new AuthClient(API_URL);

    const toastStore = getToastStore();

    async function submit() {
        if (!field.email || !field.password) {
            return toastStore.trigger({
                message: 'Please enter your email and password',
                background: 'variant-filled-error'
            });
        }

        try {
            field.disabled = true;

            if (authStore.exists() && authStore.getNotNull().email == field.email) {
                await nextLogin();
            } else {
                await initialLogin();
            }

            // window.dispatchEvent(new Event('updateHeader'));
        } catch (e) {
            field.disabled = false;

            console.error(e);

            return toastStore.trigger({
                message: 'Something went wrong',
                background: 'variant-filled-error'
            });
        }
    }

    async function initialLogin() {
        const credentials = await authClient.login(field.email, field.password);
        authStore.update({
            email: field.email,
            userId: credentials.userId,
            apiKey: credentials.apiKey,
            publicKey: credentials.publicKey
        });

        const sharedSecret = computeSharedSecret(credentials.privateKey, credentials.publicKey);

        secretsStore.update({
            privateKey: credentials.privateKey,
            sharedSecret
        });

        await goto('/user/vault');
    }

    async function nextLogin() {
        const preLogin = await authClient.preLogin(field.email);

        const privateKey = await computePasswordHash(field.password, field.email, preLogin);
        const publicKey = publicFromPrivate(privateKey);
        if (publicKey != authStore.getNotNull().publicKey) {
            field.disabled = false;

            return toastStore.trigger({
                message: 'Invalid password',
                background: 'variant-filled-error'
            });
        }

        const sharedSecret = computeSharedSecret(privateKey, publicKey);
        secretsStore.update({
            privateKey,
            sharedSecret
        });

        await goto('/user/vault');
    }
</script>

<section class="h-full-header flex justify-center items-center">
    <div class="card p-6 space-y-4 max-w-sm">
        <h1 class="text-xl text-center">
            {$_('login.title')}
        </h1>

        <label class="label">
            <span>
                {$_('field.email')}
            </span>
            <input
                class="input"
                type="text"
                placeholder={$_('field.email')}
                bind:value={field.email}
            />
        </label>

        <label class="label">
            <span>
                {$_('field.password')}
            </span>
            <input
                class="input"
                type="password"
                placeholder={$_('field.password')}
                bind:value={field.password}
            />
            <button class="text-sm text-primary-500">
                {$_('login.hint_link')}
            </button>
        </label>

        <p class="text-sm opacity-75">
            {$_('login.register_msg')}
            <a href="/auth/register" class="text-primary-500 font-bold">
                {$_('login.register_link')}
            </a>
        </p>

        <button
            type="button"
            class="btn variant-filled-primary w-full"
            on:click={submit}
            disabled={field.disabled}
        >
            {$_('login.btn')}
        </button>
    </div>
</section>
