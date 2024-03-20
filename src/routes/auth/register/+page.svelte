<script>
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';

    import { secretsStore } from '$lib/storage';
    import { goto } from '$app/navigation';

    onMount(() => {
        if (secretsStore.exists()) {
            return goto('/user/vault');
        }
    });

    let field = {
        email: '',
        password: '',
        confirmPassword: '',
        passwordHint: ''
    };

    async function submit() {
        console.log(field);
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
