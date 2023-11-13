<template>
    <UCard>
        <template #header>
            <div class="flex items-center justify-between gap-2">
                <div>
                    <h1 class="font-medium mb-2">Employees</h1>
                </div>

                <UButton label="Add Employees" trailing-icon="i-mdi-account-plus" to="/employees/create" />
            </div>
        </template>
        <!-- Filters -->
        <div class="flex items-center justify-between gap-3 px-4 py-3">
            <UInput v-model="search" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search..." />

            <USelectMenu multiple :options="todoStatus" v-model="selectedStatus" placeholder="Select status..."
                class="w-40" />
        </div>

        <!-- Header and Action buttons -->
        <div class="flex justify-between items-center w-full px-4 py-3">
            <div class="flex items-center gap-1.5">
                <span class="text-sm leading-5">Rows per page:</span>

                <USelect v-model="pageCount" :options="[3, 5, 10, 20, 30, 40]" class="me-2 w-20" size="xs" />
            </div>

            <div class="flex gap-1.5 items-center">
                <UDropdown v-if="selected.length > 1" :items="actions" :ui="{ width: 'w-36' }">
                    <UButton icon="i-heroicons-chevron-down" trailing color="gray" size="xs">
                        Mark as
                    </UButton>
                </UDropdown>

                <USelectMenu v-model="selectedColumns" :options="columns" multiple>
                    <UButton icon="i-heroicons-view-columns" color="gray" size="xs">
                        Columns
                    </UButton>
                </USelectMenu>

                <UButton icon="i-heroicons-funnel" color="gray" size="xs"
                    :disabled="search === '' && selectedStatus.length === 0" @click="resetFilters">
                    Reset
                </UButton>
            </div>
        </div>

        <div>
            <UTable :rows="employees" :columns="[additionalColumns[0], ...columnsTable, additionalColumns[1]]"
                :loading="pending" v-model="selected">

                <template #image-data>
                    <UAvatar src="https://source.unsplash.com/300x300?person" alt="avatar" />
                </template>

                <template #name-data="{ row }">
                    <NuxtLink :to="`/employees/${row.id}`" class="hover:underline hover:text-blue-500">
                        <span>{{ row.name }}</span>
                    </NuxtLink>
                </template>

                <template #status-data="{ row }">
                    <div class="text-center">
                        <UBadge :color="row.status === 'permanent'
                            ? 'green'
                            : row.status === 'probation'
                                ? 'yellow'
                                : 'red'
                            " :label="row.status" />
                    </div>
                </template>

                <template #gender-data="{ row }">
                    <div class="text-center">
                        <UIcon :name="row.gender === 'male'
                            ? 'i-mdi-gender-male'
                            : 'i-mdi-gender-female'
                            " class="mx-auto rounded-full p-2" :class="row.gender === 'male'
        ? 'bg-blue-500'
        : 'bg-pink-500'
        " />
                    </div>
                </template>

                <template #actions-data="{ row }">
                    <UDropdown :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
                </template>

            </UTable>
        </div>

        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination v-model="page" :page-count="pageCount" :total="employees.length" />
        </div>
    </UCard>
</template>

<script setup lang="ts">
const router = useRouter();

const columns = [

    { key: "nip", label: "ID" },
    { key: "name", label: "Name", class: "min-w-[200px]" },
    { key: "gender", label: "Gender", class: "text-center" },
    { key: "organization", label: "Organization" },
    { key: "status", label: "Status", class: "text-center" },
];

const additionalColumns = [
    { key: "image" },
    { key: "actions" },
];

// Filters
const todoStatus = [
    {
        key: "probation",
        label: "probation",
        value: false,
    },
    {
        key: "contract",
        label: "Contract",
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

const resetFilters = () => {
    search.value = "";
    selectedStatus.value = [];
};

const search = useDebounceRef("", 500, false);
const { data: employees, pending } = await useLazyAsyncData<any[]>(
    "employees",
    () =>
        ($fetch as any)("/api/employees", {
            query: {
                q: search.value,
                _page: page.value,
                _limit: pageCount.value,
            },
        }),
    {
        default: () => [],
        watch: [search, page, pageCount],

    }
);

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
            label: "Assign as a teacher",
            icon: "i-mdi-account-school",
            click: () => router.push(`/teachers/create?employee_id=${row.id}`),
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

</script>

<style></style>
