<script>
    import { _ } from 'svelte-i18n';
    import Devices from 'svelte-material-icons/Devices.svelte';
    import ShieldCheck from 'svelte-material-icons/ShieldCheckOutline.svelte';
    import Timer from 'svelte-material-icons/TimerOutline.svelte';

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

    <div class="hidden lg:block">
        <div class="mockup-phone shadow-2xl">
            <div class="camera"></div>
            <div class="display w-[250px]">
                <img src={phoneScreenshot} alt="screenshot of android application" />
            </div>
        </div>
    </div>
</section>

<section class="flex min-h-[50vh] w-full bg-primary text-primary-content">
    <div class="container flex justify-center items-center mx-auto">
        <div class="flex flex-wrap justify-center text-center gap-12 p-20">
            <div class="badge-item">
                <Timer class="h-16 w-16 p-2 outline rounded-xl" />

                <p class="font-bold">
                    {$_('page.home.section.second.badges.fast.h1')}
                </p>

                <p>
                    {$_('page.home.section.second.badges.fast.p')}
                </p>
            </div>

            <div class="badge-item">
                <ShieldCheck class="h-16 w-16 p-2 outline rounded-xl" />

                <p class="font-bold">
                    {$_('page.home.section.second.badges.secure.h1')}
                </p>

                <p>
                    {$_('page.home.section.second.badges.secure.p')}
                </p>
            </div>

            <div class="badge-item">
                <Devices class="h-16 w-16 p-2 outline rounded-xl" />

                <p class="font-bold">
                    {$_('page.home.section.second.badges.accessible.h1')}
                </p>

                <p>
                    {$_('page.home.section.second.badges.accessible.p')}
                </p>
            </div>
        </div>
    </div>
</section>

<Footer />

<style lang="postcss">
    .badge-item {
        @apply flex flex-col gap-2 items-center max-w-[16em];
    }
</style>
