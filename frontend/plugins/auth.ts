export default defineNuxtPlugin((nuxtApp) => {
    const user = useUser();

    // Skip if already initialized on server
    if (user.value !== undefined) return;

    // user.value = await useFetchCurrentUser();
    nuxtApp.runWithContext(
        async () => (user.value = await useFetchCurrentUser())
    );
});
