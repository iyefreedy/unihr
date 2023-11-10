<template>
    <UCard>
        <template #header>
            <div class="flex items-center justify-between gap-2">
                <div>
                    <h1 class="font-medium mb-2">Employees</h1>
                    <p class="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eos quae, nihil nam ab ullam tenetur aspernatur
                        fuga repudiandae doloremque dolor.
                    </p>
                </div>

                <UButton label="Add Employees" trailing-icon="i-mdi-account-plus" to="/employees/create" />
            </div>
        </template>

        <div class="flex px-3 py-2 border-b border-gray-200 dark:border-gray-700">
            <UInput v-model="search" placeholder="Filter people..." size="sm" />
        </div>
        <div>
            <UTable :rows="employees" :columns="columns" :loading="pending" v-model="selected">
                <template #gender-header>
                    <UDropdown :items="genderItems" :popper="{ placement: 'bottom-start' }">
                        <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
                    </UDropdown>
                </template>

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
                    <UIcon :name="row.gender.value === 'male'
                        ? 'i-mdi-gender-male'
                        : 'i-mdi-gender-female'
                        " class="rounded-full p-2" :class="row.gender.value === 'male'
        ? 'bg-blue-500'
        : 'bg-pink-500'
        " />
                </template>

                <template #actions-data="{ row }">
                    <UDropdown :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
                </template>
            </UTable>
        </div>

        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <!-- <UPagination
                v-model="page"
                :page-count="pageCount"
                :total="rows.length"
            /> -->
        </div>
    </UCard>

    <UModal v-model="isOpen">
        <div class="p-6">
            <h6 class="mb-4">Create new Organizations</h6>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <UInput placeholder="Name" />
                </div>

                <div class="mb-3">
                    <UInput placeholder="Email" />
                </div>

                <UButton type="submit" label="Submit" :loading="processing" />
            </form>
        </div>
    </UModal>
</template>

<script setup lang="ts">
const router = useRouter();
const genderItems = [
    [
        {
            label: "Male",
            icon: "i-mdi-gender-male",
        },
        {
            label: "Female",
            icon: "i-mdi-gender-female",
        },
    ],
];

const columns = [
    { key: "image" },
    { key: "nip", label: "ID" },
    { key: "name", label: "Name", class: "min-w-[200px]" },
    { key: "gender", label: "Gender", class: "text-center" },
    { key: "organization", label: "Organization" },
    { key: "status", label: "Status", class: "text-center" },
    { key: "actions" },
];
const page = ref(1);
const limit = ref(5);
const selected = ref([]);

const search = useDebounceRef("", 500, false);
const { data: employees, pending } = await useLazyAsyncData<any>(
    "employees",
    () =>
        ($fetch as any)("/api/employees", {
            query: {
                q: search.value,
                _page: page.value,
                _limit: limit.value,
            },
        }),
    {
        default: () => [],
        watch: [search, page, limit],
    }
);

const items = (row: any) => [
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

const isOpen = ref(false);
const processing = ref(false);
const toast = useToast();

const submit = () => {
    console.log("Submitted: Create new organizations");
    processing.value = true;
    setTimeout(() => {
        processing.value = false;
        isOpen.value = false;
        toast.add({
            title: "Success",
            description: "Organization has been created",
        });
    }, 1000);
};
</script>

<style></style>
