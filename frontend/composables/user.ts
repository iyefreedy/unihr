// Value is initialized in: ~/plugins/auth.ts
export const useUser = <T = User>() => {
    return useState<T | undefined | null>("user", () => undefined);
};
