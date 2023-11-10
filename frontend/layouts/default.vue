<template>
    <div class="min-h-screen bg-slate-100 group dark:bg-black">
        <Topbar />

        <aside
            id="sidebar"
            class="fixed top-0 left-0 z-30 h-screen w-[270px] py-4 px-6 bg-white rounded-tr-xl rounded-br-xl transition-[transform,_left] lg:top-24 lg:rounded-xl lg:h-[calc(100vh_-_8rem)] dark:bg-gray-900"
            :class="sidebarContainerClass"
        >
            <Sidebar />
        </aside>

        <!-- Main Content -->
        <main
            class="flex flex-col justify-between pt-24 px-4 pb-16 min-h-screen transition-[margin-left] md:px-8 lg:px-10"
            :class="mainContainerClass"
        >
            <div>
                <slot />
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
const { isSidebarActive, layoutState } = useLayout();
const outsideClickListener = ref<EventListener | null>(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const sidebarContainerClass = computed(() => {
    return {
        "-translate-x-full": !layoutState.staticMenuMobileActive.value,
        "translate-x-0": layoutState.staticMenuMobileActive.value,
        "lg:-translate-x-full lg:left-0":
            layoutState.staticMenuDesktopInactive.value,
        "lg:translate-x-0 lg:left-4":
            !layoutState.staticMenuDesktopInactive.value,
    };
});

const mainContainerClass = computed(() => {
    return {
        "lg:ml-0": layoutState.staticMenuDesktopInactive.value,
        "lg:ml-[270px]": !layoutState.staticMenuDesktopInactive.value,
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event as MouseEvent)) {
                layoutState.staticMenuMobileActive.value = false;
            }
        };

        document.addEventListener("click", outsideClickListener.value);
    }
};

const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener("click", outsideClickListener.value);
        outsideClickListener.value = null;
    }
};

const isOutsideClicked = (event: MouseEvent) => {
    const sidebarEl = document.querySelector("#sidebar");
    const topbarEl = document.querySelector("#sidebarToggler");
    const notificationButtonEl = document.querySelector("#notificationButton");

    console.log(event.target);

    return (
        !(
            sidebarEl?.isSameNode(event.target as Node) ||
            sidebarEl?.contains(event.target as Node) ||
            topbarEl?.isSameNode(event.target as Node) ||
            topbarEl?.contains(event.target as Node)
        ) ||
        notificationButtonEl?.contains(event.target as Node) ||
        notificationButtonEl?.isSameNode(event.target as Node)
    );
};
</script>

<style></style>
