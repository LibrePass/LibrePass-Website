<script lang="ts">
    import { _ } from 'svelte-i18n';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import { popup } from '@skeletonlabs/skeleton';
    import { Menu } from '@steeze-ui/material-design-icons';
    import { Icon } from '@steeze-ui/svelte-icon';

    const menu: PopupSettings = {
        event: 'click',
        target: 'menu'
    };
</script>

<div class="md:hidden">
    <button use:popup={menu} class="h-5">
        <Icon src={Menu} />
    </button>

    <div class="card text-base p-4" data-popup="menu">
        <nav class="list-nav">
            <ul>
                <li>
                    <a href="/auth/register">
                        {$_('nav.get_started')}
                    </a>
                </li>
                <li>
                    <a href="/auth/login">
                        {$_('nav.login')}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
