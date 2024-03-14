<script>
    import { _ } from 'svelte-i18n';

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
    <div class="flex flex-col gap-10 max-w-[32em]">
        <h1 class="text-2xl md:text-3xl lg:text-4xl text-center">Benefits</h1>

        <div class="benefit">
            <h2>Security</h2>
            <p>
                LibrePass provides the highest security standards, using end-to-end encryption to protect the most
                sensitive data.
            </p>
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

    .benefit h2 {
        @apply font-bold text-xl md:text-2xl;
    }

    /* .benefit p {
        
    } */
</style>
