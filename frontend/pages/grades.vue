<template>
    <div class="space-y-4">
        <UCard>
            <template #header>
                <h1>Grades</h1>
                <p class="text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque laboriosam, expedita beatae maxime ab consectetur
                    accusantium impedit error tenetur omnis quam a dignissimos
                    aliquam numquam autem reprehenderit hic. Molestiae,
                    necessitatibus.
                </p>
            </template>

            <main>
                <div class="flex items-center justify-between mb-6">
                    <UInput placeholder="Search..." />
                    <UButton class="ml-auto inline-block" label="New grade" />
                </div>
                <UTable :rows="grades" :columns="gradecolumns">
                    <template #actions-data="{ row }">
                        <UDropdown :items="actionItems(row)">
                            <UButton
                                color="gray"
                                variant="ghost"
                                icon="i-heroicons-ellipsis-horizontal-20-solid"
                        /></UDropdown>
                    </template>
                </UTable>
            </main>
        </UCard>
        <UCard>
            <template #header>
                <h1>Ranks</h1>
                <p class="text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque laboriosam, expedita beatae maxime ab consectetur
                    accusantium impedit error tenetur omnis quam a dignissimos
                    aliquam numquam autem reprehenderit hic. Molestiae,
                    necessitatibus.
                </p>
            </template>

            <main>
                <div class="flex items-center justify-between mb-6">
                    <UInput placeholder="Search..." />
                    <UButton class="ml-auto inline-block" label="New rank" />
                </div>

                <UTable
                    :rows="ranks"
                    :columns="rankColumns"
                    :ui="{
                        tr: {
                            base: 'hover:bg-gray-200 transition-colors duration-300 dark:hover:bg-gray-800',
                        },
                    }"
                >
                    <template #salary-data="{ row }">
                        <UBadge color="teal"
                            >{{ numberFormat(row.salary_from) }} -
                            {{ numberFormat(row.salary_to) }}</UBadge
                        >
                    </template>
                    <template #actions-data="{ row }">
                        <UDropdown :items="actionItems(row)">
                            <UButton
                                color="gray"
                                variant="ghost"
                                icon="i-heroicons-ellipsis-horizontal-20-solid"
                            />
                        </UDropdown> </template
                ></UTable>
            </main>
        </UCard>
    </div>
</template>

<script lang="ts" setup>
const gradecolumns = [
    {
        key: "name",
        label: "Name",
    },
    {
        key: "alias",
        label: "Alias",
    },
    {
        key: "actions",
    },
];

const rankColumns = [
    {
        key: "name",
        label: "Name",
    },
    {
        key: "alias",
        label: "Alias",
    },
    {
        key: "salary",
        label: "Range Salary",
    },
    {
        key: "actions",
    },
];
const grades = [
    {
        name: "Golongan I",
        alias: "Juru",
    },
    {
        name: "Golongan II",
        alias: "Pengatur",
    },
];

const ranks = [
    {
        name: "IA",
        alias: "Juru Muda",
        salary_from: 1_560_800,
        salary_to: 2_335_800,
    },
    {
        name: "IB",
        alias: "Juru Muda Tk.I",
        salary_from: 1_704_500,
        salary_to: 2_472_900,
    },
    {
        name: "IC",
        alias: "Juru",
        salary_from: 1_776_600,
        salary_to: 2_577_500,
    },
    {
        name: "ID",
        alias: "Juru Tk.I",
        salary_from: 1_851_800,
        salary_to: 2_686_500,
    },
    {
        name: "IIA",
        alias: "Pengatur Muda",
        salary_from: 2_022_200,
        salary_to: 3_373_600,
    },
    {
        name: "IIB",
        alias: "Pengatur Muda Tk.I",
        salary_from: 2_208_400,
        salary_to: 3_516_300,
    },
    {
        name: "IIC",
        alias: "Pengatur",
        salary_from: 2_301_800,
        salary_to: 3_665_000,
    },
    {
        name: "IID",
        alias: "Pengatur Tk.I",
        salary_from: 2_399_200,
        salary_to: 3_820_000,
    },
];

const actionItems = (row: any) => [
    [
        {
            label: "Edit",
            icon: "i-mdi-database-edit",
        },
        {
            label: "Delete",
            icon: "i-mdi-trash-can",
        },
    ],
];
</script>

<style></style>
