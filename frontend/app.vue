<template>
    <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
        />

        <Link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
        />
    </Head>
    <Body class="antialiased">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>

        <UNotifications />
    </Body>
</template>

<style>
body {
    font-family: "Poppins", sans-serif;
}
</style>
