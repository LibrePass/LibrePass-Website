<script>
    import LibrePassIcon from '$lib/components/icon/LibrePassIcon.svelte';
</script>

<footer class="bg-surface-100-800-token">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-8">
        <div class="md:flex md:justify-between">
            <div class="flex flex-col justify-center mb-6 md:mb-0">
                <a href="/" class="flex items-center">
                    <LibrePassIcon class="h-10 me-2" />
                    <div class="grid grid-cols-1">
                        <span class="self-center text-2xl font-semibold">LibrePass</span>
                        <span class="text-sm text-surface-800-100-token">
                            Take control of your password with LibrePass</span
                        >
                    </div>
                </a>
            </div>

            <div class="grid gap-8 sm:gap-6 grid-cols-2 sm:grid-cols-3">
                <div>
                    <h2 class="footer-h2">Download</h2>
                    <ul class="footer-links">
                        <li>
                            <a href="https://f-droid.org/en/packages/dev.medzik.librepass.android">Android</a>
                        </li>
                        <li>
                            <a href="https://github.com/LibrePass/LibrePass-iOS/releases">iOS</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="footer-h2">Contact</h2>
                    <ul class="footer-links">
                        <li>
                            <a href="mailto:contact@librepass.org">E-Mail</a>
                        </li>
                        <li>
                            <a href="https://github.com/LibrePass">GitHub</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="footer-h2">Legal</h2>
                    <ul class="footer-links">
                        <li>
                            <a href="/privacy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<style lang="postcss">
    .footer-h2 {
        @apply text-sm font-semibold uppercase mb-4 text-primary-500;
    }

    .footer-links {
        @apply font-medium space-y-2;
    }
</style>
