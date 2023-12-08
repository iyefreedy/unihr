<template>
    <UCard>
        <template #header>
            <div class="flex items-center justify-between gap-2">
                <div>
                    <h1 class="font-medium mb-2 text-sm">Employees</h1>
                    <p class="text-xs text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fuga ipsum quod, corporis explicabo minima
                        dignissimos?
                    </p>
                </div>

                <UButton
                    size="xs"
                    label="Add Employees"
                    trailing-icon="i-mdi-account-plus"
                    to="/employees/create"
                />
            </div>
        </template>
        <!-- Filters -->
        <div class="flex items-center justify-between gap-3 px-4 py-3">
            <UInput
                v-model="search"
                icon="i-heroicons-magnifying-glass-20-solid"
                placeholder="Search..."
            />

            <USelectMenu
                multiple
                :options="todoStatus"
                v-model="selectedStatus"
                placeholder="Status"
                class="w-40"
            />
        </div>

        <!-- Header and Action buttons -->
        <div class="flex justify-between items-center w-full px-4 py-3">
            <div class="flex items-center gap-1.5">
                <span class="hidden text-sm leading-5 md:inline"
                    >Rows per page:</span
                >

                <USelect
                    v-model="pageCount"
                    :options="[5, 10, 25, 50]"
                    @change="page = 1"
                    class="me-2 w-20"
                    size="xs"
                />
            </div>

            <div class="flex gap-1.5 items-center">
                <UDropdown
                    v-if="selected.length > 1"
                    :items="actions"
                    :ui="{ width: 'w-36' }"
                >
                    <UButton
                        icon="i-heroicons-chevron-down"
                        trailing
                        color="gray"
                        size="xs"
                    >
                        Mark as
                    </UButton>
                </UDropdown>

                <USelectMenu
                    v-model="selectedColumns"
                    :options="columns"
                    multiple
                >
                    <UButton
                        icon="i-heroicons-view-columns"
                        color="gray"
                        size="xs"
                    >
                        Columns
                    </UButton>
                </USelectMenu>

                <UButton
                    icon="i-heroicons-funnel"
                    color="gray"
                    size="xs"
                    :disabled="search === '' && selectedStatus.length === 0"
                    @click="resetFilters"
                >
                    Reset
                </UButton>
            </div>
        </div>

        <div>
            <UTable
                :rows="rows"
                :columns="[...columnsTable, additionalColumns[1]]"
                :loading="pending"
                v-model="selected"
                @contextmenu.prevent="contextMenuHandler"
                :ui="{
                    tr: {
                        base: 'transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800 context-menu',
                    },
                }"
            >
                <template #name-data="{ row }">
                    <NuxtLink
                        :to="`/employees/${row.id}`"
                        @contextmenu.prevent="contextMenuHandler"
                        class="flex items-center hover:underline hover:text-blue-500"
                    >
                        <UAvatar
                            src="https://source.unsplash.com/300x300?person"
                            alt="avatar"
                        />
                        <span class="ml-3">{{ row.name }}</span>
                    </NuxtLink>
                </template>

                <template #status-data="{ row }">
                    <div class="text-center">
                        <UBadge
                            :color="
                                row.status === 'permanent'
                                    ? 'green'
                                    : row.status === 'probation'
                                    ? 'yellow'
                                    : 'red'
                            "
                            :label="row.status"
                        />
                    </div>
                </template>

                <template #gender-data="{ row }">
                    <div class="text-center">
                        <UIcon
                            :name="
                                row.gender === 'male'
                                    ? 'i-mdi-gender-male'
                                    : 'i-mdi-gender-female'
                            "
                            class="mx-auto rounded-full p-2"
                            :class="
                                row.gender === 'male'
                                    ? 'bg-blue-500'
                                    : 'bg-pink-500'
                            "
                        />
                    </div>
                </template>

                <template #actions-data="{ row }">
                    <UDropdown :items="items(row)">
                        <UButton
                            color="gray"
                            :ui="{ rounded: 'rounded-full' }"
                            variant="solid"
                            icon="i-heroicons-ellipsis-horizontal-20-solid"
                        />
                    </UDropdown>
                </template>
            </UTable>
        </div>

        <template #footer>
            <div class="flex flex-wrap justify-between items-center">
                <div>
                    <span class="text-sm leading-5">
                        Showing
                        <span class="font-medium">{{ pageFrom }}</span>
                        to
                        <span class="font-medium">{{ pageTo }}</span>
                        of
                        <span class="font-medium">{{ pageTotal }}</span>
                        results
                    </span>
                </div>

                <UPagination
                    v-model="page"
                    :page-count="pageCount"
                    :total="pageTotal"
                    :ui="{
                        wrapper: 'flex items-center gap-1',
                        rounded: '!rounded-full min-w-[32px] justify-center',
                        default: {
                            activeButton: {
                                variant: 'outline',
                            },
                        },
                    }"
                />
            </div>
        </template>
    </UCard>
</template>

<script setup lang="ts">
const router = useRouter();

const columns = [
    { key: "name", label: "Name", class: "min-w-[200px]" },
    { key: "nip", label: "ID" },
    { key: "gender", label: "Gender", class: "text-center" },
    { key: "organization", label: "Organization" },
    { key: "status", label: "Status", class: "text-center" },
];

const additionalColumns = [{ key: "image" }, { key: "actions" }];

// Filters
const todoStatus = [
    {
        key: "probation",
        label: "probation",
        value: false,
    },
    {
        key: "contract",
        label: "contract",
        value: false,
    },
];
const selectedColumns = ref(columns);
const columnsTable = computed(() =>
    columns.filter((column) => selectedColumns.value.includes(column))
);
const selectedStatus = ref([]);
const page = ref(1);
const pageCount = ref(5);
const selected = ref([]);

const pageTotal = computed(() => employees.value.length); // This value should be dynamic coming from the API
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1);
const pageTo = computed(() =>
    Math.min(page.value * pageCount.value, pageTotal.value)
);
const resetFilters = () => {
    search.value = "";
    selectedStatus.value = [];
};

const search = useDebounceRef("", 500, false);
const { data: employees, pending } = await useLazyAsyncData<
    {
        id: number;
        nip: string;
        name: string;
        organization: string;
        gender: string;
        status: string;
    }[]
>(
    "employees",
    () =>
        ($fetch as any)("/api/employees", {
            query: {
                q: search.value,
            },
        }),
    {
        default: () => [],
        watch: [search],
    }
);

const rows = computed(() => {
    return employees.value.slice(
        (page.value - 1) * pageCount.value,
        page.value * pageCount.value
    );
});

// Actions
const actions = [
    [
        {
            key: "completed",
            label: "Completed",
            icon: "i-heroicons-check",
        },
    ],
    [
        {
            key: "uncompleted",
            label: "In Progress",
            icon: "i-heroicons-arrow-path",
        },
    ],
];

const items = (row: any) => [
    [
        {
            label: "Assign as a lecturer",
            icon: "i-mdi-account-school",
            click: () => router.push(`/lecturer/create?employee_id=${row.id}`),
        },
    ],
    [
        {
            label: "Detail",
            icon: "i-mdi-account-details",
            click: () => router.push(`/employees/${row.id}`),
        },
        {
            label: "Transfer",
            icon: "i-mdi-account-arrow-right",
        },
    ],
    [
        {
            label: "Resign",
            icon: "i-mdi-account-remove",
        },
        {
            label: "Delete",
            icon: "i-mdi-trash-can",
        },
    ],
];

const contextMenuHandler = (e) => {
    console.log(e);
};

onMounted(() => {
    const contextMenuEl = document.querySelectorAll(".context-menu");
    // contextMenuEl.forEach((ctx) => console.log(ctx));
});
</script>

<style></style>
