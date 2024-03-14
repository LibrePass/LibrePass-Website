<script>
    import { _ } from 'svelte-i18n';
    import { Code, Devices, Lock, Shield } from '@steeze-ui/material-design-icons';
    import { Icon } from '@steeze-ui/svelte-icon';

    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title={$_('home.title')} description={$_('home.description')} />

<section class="first-container flex justify-center items-center max-w-[980px] mx-auto gap-5">
    <div class="flex flex-col justify-start gap-4 text-center sm:text-start">
        <h1 class="text-3xl md:text-4xl lg:text-5xl">
            {$_('home.first.h1')}
        </h1>

        <p class="max-w-[720px] text-lg sm:text-xl">
            {$_('home.first.p')}
        </p>

        <div class="flex justify-center sm:justify-start gap-4">
            <a href="/auth/register" class="btn variant-filled-primary">
                {$_('home.first.btn.register')} &rarr;
            </a>

            <a href="/auth/login" class="btn variant-soft-primary">
                {$_('home.first.btn.login')} &rarr;
            </a>
        </div>
    </div>
</section>

<section class="flex justify-center items-center mx-auto py-[10vh] px-[2em] variant-filled-primary">
    <div class="flex flex-col gap-10">
        <h1 class="text-2xl md:text-3xl lg:text-4xl text-center font-bold">{$_('home.second.h1')}</h1>
        <p class="text-lg md:text-xl lg:text-2xl text-center text-primary-100 dark:text-primary-900">
            {$_('home.second.p')}
        </p>

        <div class="grid text-center md:text-start md:grid-cols-2 max-w-screen-md gap-10">
            <div class="benefit">
                <div class="icon">
                    <Icon src={Lock} size="24px" theme="round" class="text-primary-600 dark:text-primary-300" />
                </div>

                <h2>{$_('home.second.security.title')}</h2>
                <p>
                    {$_('home.second.security.p')}
                </p>
            </div>

            <div class="benefit">
                <div class="icon">
                    <Icon src={Devices} size="24px" theme="round" class="text-primary-600 dark:text-primary-300" />
                </div>

                <h2>{$_('home.second.cross_sync.title')}</h2>
                <p>
                    {$_('home.second.cross_sync.description')}
                </p>
            </div>

            <div class="benefit">
                <div class="icon">
                    <Icon src={Shield} size="24px" theme="round" class="text-primary-600 dark:text-primary-300" />
                </div>

                <h2>{$_('home.second.generator.title')}</h2>
                <p>
                    {$_('home.second.generator.description')}
                </p>
            </div>

            <div class="benefit">
                <div class="icon">
                    <Icon src={Code} size="24px" theme="round" class="text-primary-600 dark:text-primary-300" />
                </div>

                <h2>{$_('home.second.oss.title')}</h2>
                <p>
                    {$_('home.second.oss.description')}
                </p>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .first-container {
        @apply min-h-[calc(90vh-4rem)];
    }

    .benefit {
        @apply space-y-2;
    }

    .benefit .icon {
        @apply flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 mx-auto md:mx-0;
    }

    .benefit h2 {
        /* @apply font-bold text-xl md:text-2xl; */
        @apply mb-2 text-xl font-bold;
    }
</style>
