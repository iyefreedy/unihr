<template>
    <header
        class="fixed z-40 h-[70px] w-full flex items-center justify-between px-6 py-2 bg-white shadow md:justify-start dark:bg-gray-900">
        <NuxtLink to="/" class="w-[200px] hidden md:flex items-center">
            <img src="~/assets/images/logo.png" alt="logo" width="50" />
            <span class="text-lg font-medium ml-2">UniHR</span>
        </NuxtLink>

        <UButton id="sidebarToggler" icon="i-mdi-menu" @click="onMenuToggle" size="lg" variant="ghost"
            :ui="{ rounded: 'rounded-full' }" />

        <ul class="flex items-center ml-auto gap-2">
            <li class="relative">
                <UButton id="notificationMenu" icon="i-mdi-bell" variant="ghost" :ui="{ rounded: 'rounded-full' }"
                    @click="notificationOpen = !notificationOpen" />

                <Transition>
                    <div v-if="notificationOpen" class="absolute top-10 right-0 z-20 group min-w-[240px]">
                        <div
                            class="p-4 bg-white shadow-lg rounded-md ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                            <div class="grid grid-cols-3 gap-4">
                                <template v-for="item in adminItems">
                                    <div class="flex flex-col items-center justify-center">
                                        <UButton :icon="item.icon" size="lg" :to="item.to" />
                                        <span class="text-[10px]">{{
                                            item.label
                                        }}</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </Transition>
            </li>

            <li>
                <UButton :icon="isDark
                    ? 'i-ic-baseline-light-mode'
                    : 'i-ic-baseline-dark-mode'
                    " variant="ghost" :ui="{ rounded: 'rounded-full' }" @click="isDark = !isDark" />
            </li>

            <li class="relative">
                <UButton id="adminMenu" icon="i-mdi-apps" variant="ghost" :ui="{ rounded: 'rounded-full' }"
                    @click="adminOpen = !adminOpen" />

                <Transition>
                    <div v-show="adminOpen" class="absolute top-10 right-0 z-20 group min-w-[240px]">
                        <div
                            class="p-4 bg-white shadow-lg rounded-md ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                            <div class="grid grid-cols-3 gap-4">
                                <template v-for="item in adminItems">
                                    <NuxtLink :to="item.to" class="flex flex-col items-center justify-center">
                                        <UButton :icon="item.icon" />
                                        <span class="text-[10px]">
                                            {{ item.label }}
                                        </span>
                                    </NuxtLink>
                                </template>
                            </div>
                        </div>
                    </div>
                </Transition>
            </li>

            <li>
                <UDropdown :items="userItems" :popper="{ placement: 'bottom-end' }">
                    <button
                        class="h-8 w-8 flex items-center justify-center ml-3 rounded-full transition-shadow focus:outline-none focus:ring focus:ring-sky-600 focus:ring-opacity-70 overflow-hidden">
                        <img src="https://picsum.photos/id/83/300/320" alt="user" />
                    </button>
                </UDropdown>
            </li>
        </ul>
    </header>
</template>

<script lang="ts" setup>
const { onMenuToggle, isSidebarActive } = useLayout();
const colorMode = useColorMode();
const router = useRouter();

const outsideNotificationClickListener = ref<EventListener | null>(null);
const outsideAdminClickListener = ref<EventListener | null>(null);
const notificationOpen = ref(false);
const adminOpen = ref(false);

watch(
    [isSidebarActive, notificationOpen, adminOpen],
    ([newIsSidebarActive, newNotificationOpen, newAdminOpen]) => {
        if (newIsSidebarActive || newNotificationOpen) {
            bindOutsideNotificationClickListener();
        } else {
            unbindOutsideNotificationClickListener();
        }

        if (newIsSidebarActive || newAdminOpen) {
            bindOutsideAdminClickListener();
        } else {
            unbindOutsideAdminClickListener();
        }
    }
);

const bindOutsideNotificationClickListener = () => {
    if (!outsideNotificationClickListener.value) {
        outsideNotificationClickListener.value = (event) => {
            if (isOutsideNotificationClicked(event as MouseEvent)) {
                notificationOpen.value = false;
            }
        };

        document.addEventListener(
            "click",
            outsideNotificationClickListener.value
        );
    }
};

const unbindOutsideNotificationClickListener = () => {
    if (outsideNotificationClickListener.value) {
        document.removeEventListener(
            "click",
            outsideNotificationClickListener.value
        );
        outsideNotificationClickListener.value = null;
    }
};

const isOutsideNotificationClicked = (event: MouseEvent) => {
    const notificationMenuButtonEl =
        document.querySelector("#notificationMenu");

    return !(
        notificationMenuButtonEl?.contains(event.target as Node) ||
        notificationMenuButtonEl?.isSameNode(event.target as Node)
    );
};

const bindOutsideAdminClickListener = () => {
    if (!outsideAdminClickListener.value) {
        outsideAdminClickListener.value = (event) => {
            if (isOutsideAdminClicked(event as MouseEvent)) {
                adminOpen.value = false;
            }
        };

        document.addEventListener("click", outsideAdminClickListener.value);
    }
};

const unbindOutsideAdminClickListener = () => {
    if (outsideAdminClickListener.value) {
        document.removeEventListener("click", outsideAdminClickListener.value);
        outsideAdminClickListener.value = null;
    }
};

const isOutsideAdminClicked = (event: MouseEvent) => {
    const adminMenuButtonEl = document.querySelector("#adminMenu");

    return !(
        adminMenuButtonEl?.contains(event.target as Node) ||
        adminMenuButtonEl?.isSameNode(event.target as Node)
    );
};

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});

const userItems = [
    [
        {
            label: "Profile",
            avatar: {
                src: "https://avatars.githubusercontent.com/u/739984?v=4",
            },
            click: () => router.push("/profile"),
        },
        {
            label: "Settings",
            icon: "i-mdi-cog",

            click: () => {
                console.log("Edit");
            },
        },
    ],

    [
        {
            label: "Sign out",
            icon: "i-mdi-logout",
        },
    ],
];

const adminItems = [
    {
        label: "Employees",
        icon: "i-mdi-account",
        to: "/employees",
    },
    {
        label: "Organizations",
        icon: "i-mdi-account-group",
        to: "/organizations",
    },
    {
        label: "Position",
        icon: "i-mdi-account-badge",
        to: "/positions",
    },
    {
        label: "Job Level",
        icon: "i-mdi-account-arrow-up",
        to: "/levels",
    },
    {
        label: "Payroll",
        icon: "i-mdi-cash-clock",
        to: "/payrolls",
    },
    {
        label: "Attendances",
        icon: "i-mdi-calendar-clock",
        to: "/attendances",
    },
    {
        label: "Submission",
        icon: "i-mdi-account-file",
        to: "/submissions",
    },
];
</script>

<style scoped>
.v-enter-active {
    transition: opacity 0.3s ease;
}

.v-enter-from {
    opacity: 0;
}
</style>
