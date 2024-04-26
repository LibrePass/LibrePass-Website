<script>
    import { _ } from 'svelte-i18n';
    import { AppBar } from '@skeletonlabs/skeleton';

    import MobileMenu from '$lib/components/header/MobileMenu.svelte';
    import LibrePassIcon from '$lib/components/icon/LibrePassIcon.svelte';
</script>

<AppBar class="fixed w-full text-xl h-16 justify-center">
    <svelte:fragment slot="lead">
        <a href="/" class="flex items-center">
            <LibrePassIcon class="h-6 mr-2" />

            <div class="inline-flex">
                <span>Libre</span>
                <span class="text-primary-500">Pass</span>
            </div>
        </a>
    </svelte:fragment>

    <svelte:fragment slot="trail">
        <MobileMenu />

        <div class="hidden md:block">
            <a href="/auth/login" class="btn">
                {$_('nav.login')}
            </a>

            <a href="/auth/register" class="btn p-2">
                {$_('nav.get_started')}
            </a>
        </div>
    </svelte:fragment>
</AppBar>
