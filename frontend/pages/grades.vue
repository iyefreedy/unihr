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
                    <UButton class="ml-auto inline-block" label="New ranks" />
                </div>
                <UTable :rows="grades" :columns="columns">
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
                    <UButton class="ml-auto inline-block" label="New ranks" />
                </div>

                <UTable :rows="ranks" :columns="columns">
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
const columns = [
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
    },
    {
        name: "IB",
        alias: "Juru Muda Tk.I",
    },
    {
        name: "IC",
        alias: "Juru",
    },
    {
        name: "ID",
        alias: "Juru Tk.I",
    },
    {
        name: "IIA",
        alias: "Pengatur Muda",
    },
    {
        name: "IIB",
        alias: "Pengatur Muda Tk.I",
    },
    {
        name: "IIC",
        alias: "Pengatur",
    },
    {
        name: "IID",
        alias: "Pengatur Tk.I",
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
