<script lang="ts">
    import { onMount } from 'svelte';
    import Menu from 'svelte-material-icons/Menu.svelte';

    import LibrePassIcon from '$lib/images/LibrePass.svelte';
    import { secretsStore } from '$lib/storage';
    import { browser } from '$app/environment';

    let sites = getSites();

    onMount(() => {
        window.addEventListener('updateHeader', () => {
            sites = getSites();
        });
    });

    function getSites() {
        let sites: { title: string; href: string }[] = [];

        if (browser && secretsStore.exists()) {
            sites.push({
                title: 'Vault',
                href: '/user/vault'
            });
        } else {
            sites.push(
                {
                    title: 'Register',
                    href: '/auth/register'
                },
                {
                    title: 'Login',
                    href: '/auth/login'
                }
            );
        }

        sites.push({
            title: 'Privacy Policy',
            href: '/privacy'
        });

        return sites;
    }
</script>

<div class="drawer">
    <input id="drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
        <div
            class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all
                    duration-100 bg-base-100 text-base-content"
        >
            <nav class="navbar w-full">
                <div class="navbar-start">
                    <span
                        class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)] md:hidden"
                        data-tip="Menu"
                    >
                        <label aria-label="Open menu" for="drawer" class="btn btn-square btn-ghost drawer-button">
                            <Menu class="h-5 w-5" />
                        </label>
                    </span>

                    <div class="flex items-center">
                        <a href="/" class="flex-0 btn normal-case btn-ghost px-2">
                            <LibrePassIcon class="h-6 w-6 md:h-7 md:w-7" />
                            <div class="text-lg inline-flex md:text-2xl">
                                <span>Libre</span>
                                <span class="text-primary">Pass</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="navbar-center"></div>

                <div class="navbar-end">
                    <ul class="menu menu-horizontal min-h-full bg-base-100 invisible md:visible">
                        {#each sites as site}
                            <li><a href={site.href}>{site.title}</a></li>
                        {/each}
                    </ul>
                </div>
            </nav>
        </div>
        <slot />
    </div>

    <div class="drawer-side z-40">
        <label for="drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-100">
            {#each sites as site}
                <li><a href={site.href}>{site.title}</a></li>
            {/each}
        </ul>
    </div>
</div>
