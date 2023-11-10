const debounce = (fn: Function, delay = 0, immediate = false) => {
    let timeout: NodeJS.Timeout;
    return (...args) => {
        if (immediate && !timeout) fn(...args);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export const useDebounceRef = <T>(
    initialValue: T,
    delay: number,
    immediate: boolean = false
) => {
    const state = ref<T>(initialValue);
    const debouncedRef = customRef((track, trigger) => ({
        get() {
            track();
            return state.value;
        },
        set: debounce(
            (value: T) => {
                state.value = value;
                trigger();
            },
            delay,
            immediate
        ),
    }));
    return debouncedRef;
};
