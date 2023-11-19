<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';
    import { AuthClient } from '@librepass/client';
    import { PasswordInput, toastStore } from '@medzik/svelte-utils';

    import Seo from '$lib/components/Seo.svelte';
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

<Seo title={$_('page.register.title')} description={$_('page.register.description')} />

<section class="h-full-header mx-auto flex justify-center sm:items-center">
    <div class="card sm:bg-base-200">
        <div class="card-body">
            <h2 class="card-title justify-center">
                {$_('page.register.title')}
            </h2>

            <div class="form-control max-w-xs gap-2">
                <div class="w-full">
                    <span class="label-text">
                        {$_('field.email')}
                    </span>
                    <input type="email" class="input input-bordered w-full max-w-xs" bind:value={email} />
                    <span class="label-text-alt">
                        {$_('page.register.email_alt')}
                    </span>
                </div>

                <div>
                    <span class="label-text">
                        {$_('field.password')}
                    </span>
                    <PasswordInput class="input-bordered max-w-xs" bind:value={password} />
                    <span class="label-text-alt">
                        <strong>{$_('page.register.password_alt_bold')}</strong>
                        {$_('page.register.password_alt')}
                    </span>
                </div>

                <div>
                    <span class="label-text">
                        {$_('field.confirm_password')}
                    </span>
                    <input type="password" class="input input-bordered w-full max-w-xs" bind:value={confirmPassword} />
                </div>

                <div>
                    <span class="label-text">
                        {$_('field.password_hint')}
                    </span>
                    <input type="text" class="input input-bordered w-full max-w-xs" bind:value={passwordHint} />
                    <span class="label-text-alt">
                        {$_('page.register.password_hint_alt')}
                    </span>
                </div>
            </div>

            <div class="card-actions">
                <button class="btn btn-primary w-full" on:click={submit} {disabled}>
                    {$_('page.register.button')}
                </button>
            </div>
        </div>
    </div>
</section>
