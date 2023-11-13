<script>
    import { _ } from 'svelte-i18n';

    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title={$_('page.verification_email.title')} />

<section class="container flex h-90-header justify-center items-center max-w-[980px] mx-auto gap-5">
    <div class="flex flex-col justify-start gap-4 text-center sm:text-start">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
            {$_('page.verification_email.header')}
        </h1>

        <div class="flex justify-center">
            <a href="/auth/login" class="flex btn btn-success">
                {$_('page.verification_email.login_btn')} &rarr;
            </a>
        </div>
    </div>
</section>
