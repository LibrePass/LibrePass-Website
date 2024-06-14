<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import { popup } from '@skeletonlabs/skeleton';
    import { Menu } from '@steeze-ui/material-design-icons';
    import { Icon } from '@steeze-ui/svelte-icon';

    import { secretsStore } from '$lib/storage';

    const menu: PopupSettings = {
        event: 'click',
        target: 'menu'
    };

    let loggedIn = false;

    onMount(() => {
        loggedIn = secretsStore.exists();

        window.addEventListener('updateMobileHeader', () => {
            loggedIn = secretsStore.exists();
        });
    });
</script>

<div class="md:hidden">
    <button use:popup={menu} class="h-5">
        <Icon src={Menu} />
    </button>

    <div class="card text-base p-4" data-popup="menu">
        <nav class="list-nav">
            <ul>
                {#if loggedIn}
                    <li>
                        <a href="/user/vault" class="btn">
                            {$_('nav.vault')}
                        </a>
                    </li>
                {:else}
                    <li>
                        <a href="/auth/login" class="btn">
                            {$_('nav.login')}
                        </a>
                    </li>

                    <li>
                        <a href="/auth/register" class="btn p-2">
                            {$_('nav.get_started')}
                        </a>
                    </li>
                {/if}
            </ul>
        </nav>
    </div>
</div>
