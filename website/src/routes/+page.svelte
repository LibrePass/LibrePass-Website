<script>
    import { _ } from 'svelte-i18n';

    import Footer from '$lib/components/Footer.svelte';
    import Seo from '$lib/components/Seo.svelte';
    import phoneScreenshot from '$lib/images/screenshots/phone.png';
</script>

<Seo title={$_('page.home.title')} description={$_('page.home.description')} />

<section class="container flex h-90-header justify-center items-center max-w-[980px] mx-auto gap-5">
    <div class="flex flex-col justify-start gap-4 text-center sm:text-start">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
            {$_('page.home.section.first.h1')}
        </h1>

        <p class="max-w-[720px] text-lg sm:text-xl">
            {$_('page.home.section.first.p')}
        </p>

        <div class="flex justify-center sm:justify-start">
            <a href="/auth/register" class="flex btn btn-primary">
                {$_('page.home.section.first.btn')} &rarr;
            </a>
        </div>
    </div>
</section>

<section
    class="flex justify-center items-center mx-auto gap-10 py-[10vh] px-[2em] bg-primary text-primary-content flex-col lg:flex-row"
>
    <div class="flex flex-col justify-start gap-10 text-center sm:text-start max-w-[32em]">
        <div class="space-y-2">
            <h1 class="text-xl md:text-2xl font-bold">
                {$_('page.home.section.features.secure.h1')}
            </h1>

            <p class="text-sm">
                {$_('page.home.section.features.secure.p')}
            </p>
        </div>

        <div class="space-y-2">
            <h1 class="text-xl md:text-2xl font-bold">
                {$_('page.home.section.features.crossDeviceSync.h1')}
            </h1>

            <p class="text-sm">
                {$_('page.home.section.features.crossDeviceSync.p')}
            </p>
        </div>

        <div class="space-y-2">
            <h1 class="text-xl md:text-2xl font-bold">
                {$_('page.home.section.features.passwordGenerator.h1')}
            </h1>

            <p class="text-sm">
                {$_('page.home.section.features.passwordGenerator.p')}
            </p>
        </div>

        <div class="space-y-2">
            <h1 class="text-xl md:text-2xl font-bold">
                {$_('page.home.section.features.opensource.h1')}
            </h1>

            <p class="text-sm">
                {$_('page.home.section.features.opensource.p')}
            </p>
        </div>
    </div>

    <div>
        <div class="mockup-phone shadow-2xl">
            <div class="camera"></div>
            <div class="display w-[250px]">
                <img src={phoneScreenshot} alt="screenshot of android application" />
            </div>
        </div>
    </div>
</section>

<Footer />
