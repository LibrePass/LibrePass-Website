<script lang="ts">
    import { onMount } from 'svelte';
    import { AuthClient, computePasswordHash, computeSharedSecret, recoverPublicKey } from '@librepass/client';

    import { goto } from '$app/navigation';
    import { PUBLIC_API_URL } from '$env/static/public';
    import Seo from '$lib/components/Seo.svelte';
    import { toastStore } from '$lib/components/utilities/Toast/stores';
    import { authStore, secretsStore } from '$lib/storage';

    let disabled = false;

    let email: string;
    let password: string;

    onMount(() => {
        if (secretsStore.exists()) {
            return goto('/user/vault');
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

            window.dispatchEvent(new Event('updateHeader'))
        } catch (e) {
            disabled = false;

            console.error(e);

            return toastStore.trigger({
                message: 'Something went wrong',
                variant: 'destructive'
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
        const publicKey = recoverPublicKey(privateKey);
        if (publicKey != authStore.get()!.publicKey) {
            disabled = false;

            return toastStore.trigger({
                message: 'Invalid password',
                variant: 'destructive'
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

<Seo
    title="Login"
    description="Login to your LibrePass account to manage your vault."
/>

<section class="h-full-header mx-auto flex justify-center items-center">
    <div class="card sm:border">
        <div class="card-body">
            <h2 class="card-title justify-center">Login</h2>

            <div class="form-control max-w-xs gap-2">
                <div class="w-full">
                    <span class="label-text">Email address</span>
                    <input type="email" class="input input-bordered w-full max-w-xs" bind:value={email} />
                </div>

                <div>
                    <span class="label-text">Password</span>
                    <input type="password" class="input input-bordered w-full max-w-xs" bind:value={password} />
                </div>
            </div>

            <div class="card-actions justify-end pt-2">
                <button class="btn btn-primary" on:click={submit} {disabled}>Login</button>
            </div>
        </div>
    </div>
</section>
