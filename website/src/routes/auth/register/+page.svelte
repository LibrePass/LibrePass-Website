<script lang="ts">
    import { onMount } from 'svelte';
    import { AuthClient } from '@librepass/client';

    import Seo from '$lib/components/Seo.svelte';
    import { toastStore } from '$lib/components/utilities/Toast/stores';
    import { secretsStore } from '$lib/storage';
    import { goto } from '$app/navigation';
    import { PUBLIC_API_URL } from '$env/static/public';

    let disabled = false;

    let email: string;
    let password: string;
    let confirmPassword: string;
    let passwordHint: string;

    onMount(() => {
        if (secretsStore.exists()) {
            return goto('/user/vault');
        }
    });

    const authClient = new AuthClient(PUBLIC_API_URL);

    async function submit() {
        if (!email || !password || !confirmPassword) {
            return toastStore.trigger({
                message: 'Please enter your email and password',
                variant: 'alert-error'
            });
        }

        if (!email.includes('@')) {
            toastStore.trigger({
                message: 'Invalid email address',
                variant: 'alert-error'
            });
        }

        if (password != confirmPassword) {
            return toastStore.trigger({
                message: 'Passwords do not match',
                variant: 'alert-error'
            });
        }

        if (password.length < 8) {
            return toastStore.trigger({
                message: 'Password must be at least 8 characters long',
                variant: 'alert-error'
            });
        }

        try {
            disabled = true;

            await authClient.register(email, password, passwordHint);

            toastStore.trigger({
                message: 'Please verify your email address'
            });

            await goto('/auth/login');
        } catch (e) {
            disabled = false;

            console.error(e);

            return toastStore.trigger({
                message: 'Something went wrong',
                variant: 'alert-error'
            });
        }
    }
</script>

<Seo
    title="Register"
    description="Create an account with LibrePass to start creating secure passwords for your accounts,
which will be stored securely."
/>

<section class="h-full-header mx-auto flex justify-center items-center">
    <div class="card sm:border">
        <div class="card-body">
            <h2 class="card-title justify-center">Create an account</h2>

            <div class="form-control max-w-xs gap-2">
                <div class="w-full">
                    <span class="label-text">Email address</span>
                    <input type="email" class="input input-bordered w-full max-w-xs" bind:value={email} />
                    <span class="label-text-alt">
                        We will never share your email address with anyone else. And we will never send spam.
                    </span>
                </div>

                <div>
                    <span class="label-text">Password</span>
                    <input type="password" class="input input-bordered w-full max-w-xs" bind:value={password} />
                    <span class="label-text-alt">
                        <strong>Important:</strong>
                        Your forgotten password cannot be recovered! 8 characters required
                    </span>
                </div>

                <div>
                    <span class="label-text">Confirm Password</span>
                    <input type="password" class="input input-bordered w-full max-w-xs" bind:value={confirmPassword} />
                </div>

                <div>
                    <span class="label-text">Password hint (optional)</span>
                    <input type="text" class="input input-bordered w-full max-w-xs" bind:value={passwordHint} />
                    <span class="label-text-alt"> The password hint can help you remember it when you forget it. </span>
                </div>
            </div>

            <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={submit} {disabled}>Register</button>
            </div>
        </div>
    </div>
</section>
