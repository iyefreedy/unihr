
export const useAuth = <T = User>() => {
    const router = useRouter();

    const user = useUser<T>();
    const isLoggedIn = computed(() => !!user.value);

    async function refresh() {
        try {
            user.value = await useFetchCurrentUser();
        } catch {
            user.value = null;
        }
    }

    async function login(credentials: LoginCredentials) {
        if (isLoggedIn.value) return;

        await $apiFetch("/login", { method: "post", body: credentials });
        await refresh();
    }

    async function register(credentials: RegisterCredentials) {
        await $apiFetch("/register", { method: "post", body: credentials });
        await refresh();
    }

    async function resendEmailVerification() {
        return await $apiFetch<{ status: string }>(
            "/email/verification-notification",
            {
                method: "post",
            }
        );
    }

    async function logout() {
        if (!isLoggedIn.value) return;

        await $apiFetch("/logout", { method: "post" });
        user.value = null;

        await router.push("/login");
    }

    async function forgotPassword(email: string) {
        return await $apiFetch<{ status: string }>("/forgot-password", {
            method: "post",
            body: { email },
        });
    }

    async function resetPassword(credentials: ResetPasswordCredentials) {
        return await $apiFetch<{ status: string }>("/reset-password", {
            method: "post",
            body: credentials,
        });
    }

    return {
        user,
        isLoggedIn,
        login,
        register,
        resendEmailVerification,
        logout,
        forgotPassword,
        resetPassword,
        refresh,
    };
};
