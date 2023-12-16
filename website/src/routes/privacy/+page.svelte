<script>
    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title="Privacy Policy" description="Privacy Policy for LibrePass" />

<section class="container flex flex-col p-5 max-w-2xl mx-auto gap-5">
    <h1 class="text-center text-3xl md:text-4xl">Privacy Policy for LibrePass</h1>

    <p class="italic text-center">Last Update: 14 September 2023</p>

    <h2 class="text-2xl">Introduction</h2>

    <p>
        In the LibrePass, we respect your privacy and prioritize the security of your personal data. This Privacy Policy
        aims to explain how we collect, store, process, and safeguard your personal data when you use our application
        and services.
    </p>

    <h3 class="text-xl">1. Types of data collected</h3>

    <h4 class="text-lg">1.1. Registration Data</h4>

    <p>
        When creating an account in LibrePass, we collect basic information such as email addresses. These details are
        necessary to create your account and ensure the security of your access to the application. We do not store your
        account password, only the public key, which is calculated from this password.
    </p>

    <h4 class="text-lg">1.2. Password Data</h4>

    <p>
        The LibrePass application allows you to store and manage your passwords. This data is encrypted on your device
        before being sent to our server, so no one (not even someone with access to our server) can read your passwords.
        We do not share your data with anyone, even those that are encrypted.
    </p>

    <h4 class="text-lg">1.3. Technical Data</h4>

    <p>
        While using the application, certain technical data, such as IP address, last login date is automatically
        collected. The data is used for diagnostic purposes, improving application functionality and preventing brute
        force attacks.
    </p>

    <h3 class="text-xl">2. Purpose of Data Processing</h3>

    <h4 class="text-lg">2.1. Service Provision</h4>

    <p>
        Your registration data is processed to enable you to use the LibrePass application. Without this information, we
        cannot provide you with access to the application's features.
    </p>

    <h4 class="text-lg">2.2. Password Security</h4>

    <p>
        Your passwords are encrypted on your device, and then in encrypted form they are securely sent to the LibrePass
        server to keep them in sync. This ensures that no one can read your passwords without knowing your master
        password (not even someone with access to the database).
    </p>

    <h3 class="text-xl">3. Sharing Personal Data with Third Parties</h3>

    <p>
        We do not share your personal data with third parties, except when required by applicable law or to protect our
        rights, safety, and the rights and safety of other users.
    </p>

    <h3 class="text-xl">4. User Rights</h3>

    <div>
        <p>You have the right to:</p>

        <ul class="list-disc px-4">
            <li>Access your personal data held by LibrePass.</li>

            <li>Correct your personal data in case of inaccuracies or errors.</li>

            <li>Delete your account at any time. (You currently need to contact us to do this).</li>
        </ul>
    </div>

    <h3 class="text-xl">5. Changes to the Privacy Policy</h3>

    <p>
        This Privacy Policy may be updated to reflect changes in our data processing practices or changes in legal
        requirements. Any updates will be announced on the LibrePass project's website.
    </p>

    <h3 class="text-xl">6. Contact</h3>

    <p>
        If you have any questions or concerns regarding our Privacy Policy, please contact us at <a
            href="mailto:contact@librepass.org"
            class="link">contact@librepass.org</a
        >.
    </p>

    <p>
        Thank you for using LibrePass and for placing your trust in us. We are committed to safeguarding your privacy
        and protecting your personal data.
    </p>
</section>
