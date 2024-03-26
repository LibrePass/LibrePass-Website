<script>
    import { AppBar } from '@skeletonlabs/skeleton';

    import LibrePassIcon from './icon/LibrePassIcon.svelte';
</script>

<AppBar class="fixed w-full text-xl h-16 justify-center" shadow="shadow-2xl">
    <a href="/" class="flex items-center">
        <LibrePassIcon class="h-6 mr-2" />

        <div class="inline-flex">
            <span>Libre</span>
            <span class="text-primary-500">Pass</span>
        </div>
    </a>
</AppBar>
