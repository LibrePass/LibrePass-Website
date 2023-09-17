<script lang="ts">
    import { flip } from 'svelte/animate';
    import { cubicInOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';

    import { toastStore } from './stores';

    /** Maximum toasts that can show at once. */
    const max = 3;

    // Filtered Toast Store
    $: filteredToasts = Array.from($toastStore).slice(0, max);

    // Crossfade animation for Toasts
    const [send, receive] = crossfade({
        duration: (d) => Math.sqrt(d * 250),

        fallback(node) {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return {
                duration: 250,
                easing: cubicInOut,
                css: (t, u) => `
                    transform: ${transform} scale(${t}) translate(${u * 0}%, ${u * 100}%);
                    opacity: ${t}
                `
            };
        }
    });
</script>

{#if $toastStore.length}
    <div class="toast toast-bottom toast-center z-[999]">
        <div class="space-y-2 flex-auto">
            {#each filteredToasts as t (t)}
                <div animate:flip={{ duration: 200 }} in:receive|global={{ key: t.id }} out:send|global={{ key: t.id }}>
                    <div class={`flex alert ${t.variant || 'alert-info'}`}>
                        <span class="flex-1">{@html t.message}</span>
                        <button
                            class="btn-square btn-sm"
                            aria-label="Dismiss toast"
                            on:click={() => toastStore.close(t.id)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}
