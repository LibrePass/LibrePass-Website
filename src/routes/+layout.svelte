<script lang="ts">
    // Floating UI for Popups
    import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
    import {
        AppBar,
        AppShell,
        initializeStores,
        Modal,
        setInitialClassState,
        storePopup,
        Toast
    } from '@skeletonlabs/skeleton';

    import '../app.postcss';
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    initializeStores();
</script>

<svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head>

<Toast />
<Modal />

<AppShell>
    <svelte:fragment slot="header">
        <AppBar class="max-h-[4em] justify-center text-xl">
            <a href="/">
                Libre<span class="text-primary-500">Pass</span>
            </a>
        </AppBar>
    </svelte:fragment>

    <!-- Router Slot -->
    <slot />

    <!-- (footer) -->
</AppShell>
