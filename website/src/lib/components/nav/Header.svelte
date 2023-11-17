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

        return sites;
    }
</script>

<div
    class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all
            duration-100 bg-base-100 text-base-content"
>
    <nav class="navbar w-full">
        <div class="navbar-start">
            <div class="dropdown">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label tabindex="0" class="btn btn-ghost md:hidden">
                    <Menu class="h-5 w-5" />
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                >
                    {#each sites as site}
                        <li><a href={site.href}>{site.title}</a></li>
                    {/each}
                </ul>
            </div>

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
            <ul class="menu menu-horizontal min-h-full bg-transparent invisible md:visible">
                {#each sites as site}
                    <li><a href={site.href}>{site.title}</a></li>
                {/each}
            </ul>
        </div>
    </nav>
</div>
