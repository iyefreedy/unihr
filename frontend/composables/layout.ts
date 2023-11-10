const layoutState = reactive({
    staticMenuDesktopInactive: false,
    staticMenuMobileActive: false,
    profileMenuVisible: false,
    notificationMenuVisible: false,
});

export const useLayout = () => {
    const onMenuToggle = () => {
        if (window.innerWidth > 1024) {
            layoutState.staticMenuDesktopInactive =
                !layoutState.staticMenuDesktopInactive;
        } else {
            layoutState.staticMenuMobileActive =
                !layoutState.staticMenuMobileActive;
        }
    };

    const isSidebarActive = computed(() => layoutState.staticMenuMobileActive);

    return {
        layoutState: toRefs(layoutState),
        onMenuToggle,
        isSidebarActive,
    };
};
