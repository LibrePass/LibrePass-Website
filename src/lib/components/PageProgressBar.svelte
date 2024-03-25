<script>
    import { cubicOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';
    import { fade } from 'svelte/transition';
    import { ProgressBar } from '@skeletonlabs/skeleton';

    import { navigating } from '$app/stores';

    const startValue = 0.35;

    const p = tweened(startValue, {
        duration: 150,
        easing: cubicOut
    });

    let isVisible = false;

    $: {
        if ($navigating) {
            isVisible = true;
        }

        if (!$navigating) {
            setTimeout(function () {
                p.set(1);
                setTimeout(function () {
                    isVisible = false;
                    p.set(startValue);
                }, 100);
            }, 100);
        }
    }
</script>

{#if $p > 0 && $p < 1 && isVisible}
    <div class="fixed w-full z-50" transition:fade={{ duration: 300 }}>
        <ProgressBar value={$p} max={1} height="h-0.5" rounded="" meter="bg-secondary-500" />
    </div>
{/if}
