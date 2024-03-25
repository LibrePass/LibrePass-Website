<script>
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';
    import { AuthClient } from '@librepass/client';
    import { getToastStore } from '@skeletonlabs/skeleton';

    import { API_URL } from '$lib';
    import { secretsStore } from '$lib/storage';
    import { goto } from '$app/navigation';

    let field = {
        email: '',
        password: '',
        confirmPassword: '',
        passwordHint: '',
        disabled: false
    };

    onMount(() => {
        if (secretsStore.exists()) {
            return goto('/user/vault');
        }
    });

    const authClient = new AuthClient(API_URL);

    const toastStore = getToastStore();

    async function submit() {
        if (!field.email || !field.password || !field.confirmPassword) {
            return toastStore.trigger({
                message: 'Please enter your email and password',
                background: 'variant-filled-error'
            });
        }

        if (field.password !== field.confirmPassword) {
            return toastStore.trigger({
                message: 'Passwords do not match',
                background: 'variant-filled-error'
            });
        }

        try {
            field.disabled = true;

            await authClient.register(field.email, field.password, field.passwordHint);

            return toastStore.trigger({
                message: 'Please verify your email address',
                background: 'variant-filled-success'
            });
        } catch (e) {
            field.disabled = false;

            console.error(e);

            return toastStore.trigger({
                message: 'Something went wrong',
                background: 'variant-filled-error'
            });
        }
    }
</script>

<section class="h-full-header flex sm:justify-center sm:items-center">
    <div class="card p-6 space-y-4 sm:max-w-sm">
        <h1 class="text-xl text-center">
            {$_('register.title')}
        </h1>

        <label class="label">
            <span>
                {$_('field.email')}
            </span>
            <input class="input" type="text" placeholder={$_('field.email')} bind:value={field.email} />
        </label>

        <label class="label">
            <span>
                {$_('field.password')}
            </span>
            <input class="input" type="password" placeholder={$_('field.password')} bind:value={field.password} />
            <span class="text-sm font-bold opacity-50">
                {$_('description.password_warning')}
            </span>
        </label>

        <label class="label">
            <span>
                {$_('field.confirm_password')}
            </span>
            <input
                class="input"
                type="password"
                placeholder={$_('field.confirm_password')}
                bind:value={field.confirmPassword}
            />
        </label>

        <label class="label">
            <span>
                {$_('field.password_hint')}
            </span>
            <input class="input" type="text" placeholder={$_('field.password_hint')} bind:value={field.passwordHint} />
            <span class="text-sm opacity-50">
                {$_('description.password_hint_info')}
            </span>
        </label>

        <p class="text-sm opacity-75">
            {$_('register.login_msg')}
            <a href="/auth/login" class="text-primary-500 font-bold">
                {$_('register.login_link')}
            </a>
        </p>

        <button type="button" class="btn variant-filled-primary w-full" on:click={submit}>
            {$_('register.btn')}
        </button>
    </div>
</section>
