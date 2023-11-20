export const useFetchCurrentUser = async <T = User>() => {
    try {
        return await $apiFetch<T>("/api/user");
    } catch (error: any) {
        if ([401, 419].includes(error?.response?.status)) return null;
        throw error;
    }
};
