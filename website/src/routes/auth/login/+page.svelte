<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';
    import { AuthClient, computePasswordHash, computeSharedSecret, publicFromPrivate } from '@librepass/client';
    import { PasswordInput, toastStore } from '@medzik/svelte-utils';

    import Seo from '$lib/components/Seo.svelte';
    import { authStore, secretsStore } from '$lib/storage';
    import { goto } from '$app/navigation';
    import { PUBLIC_API_URL } from '$env/static/public';

    let disabled = false;

    let email: string;
    let password: string;

    onMount(() => {
        if (secretsStore.exists()) {
            return goto('/user/vault');
        }

        if (authStore.exists()) {
            email = authStore.get()!.email;
        }
    });

    const authClient = new AuthClient(PUBLIC_API_URL);

    async function submit() {
        if (!email || !password) {
            return toastStore.trigger({
                message: 'Please enter your email and password',
                variant: 'alert-error'
            });
        }

        if (!email.includes('@')) {
            return toastStore.trigger({
                message: 'Invalid email address',
                variant: 'alert-error'
            });
        }

        try {
            disabled = true;

            if (authStore.exists() && authStore.get()!.email == email) {
                await secondLogin();
            } else await firstLogin();

            window.dispatchEvent(new Event('updateHeader'));
        } catch (e) {
            disabled = false;

            console.error(e);

            return toastStore.trigger({
                message: 'Something went wrong',
                variant: 'alert-error'
            });
        }
    }

    async function firstLogin() {
        const credentials = await authClient.login(email, password);
        authStore.update({
            email: email,
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

    async function secondLogin() {
        const preLogin = await authClient.preLogin(email);

        const privateKey = await computePasswordHash(password, email, preLogin);
        const publicKey = publicFromPrivate(privateKey);
        if (publicKey != authStore.get()!.publicKey) {
            disabled = false;

            return toastStore.trigger({
                message: 'Invalid password',
                variant: 'alert-error'
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

<Seo title={$_('page.login.title')} description={$_('page.login.description')} />

<section class="h-full-header mx-auto flex justify-center sm:items-center">
    <div class="card sm:bg-base-200">
        <div class="card-body">
            <h2 class="card-title justify-center">
                {$_('page.login.h1')}
            </h2>

            <div class="form-control max-w-xs gap-2">
                <div class="w-full">
                    <span class="label-text">
                        {$_('field.email')}
                    </span>
                    <input type="email" class="input input-bordered w-full max-w-xs" bind:value={email} />
                </div>

                <div>
                    <span class="label-text">
                        {$_('field.password')}
                    </span>
                    <PasswordInput class="input-bordered max-w-xs" bind:value={password} />
                </div>
            </div>

            <div class="card-actions pt-2">
                <button class="btn btn-primary w-full" on:click={submit} {disabled}>
                    {$_('page.login.btn')}
                </button>
            </div>
        </div>
    </div>
</section>
