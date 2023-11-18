<template>
    <div>
        <UCard>
            <template #header>
                <h1>Levels</h1>
                <span class="text-xs"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorem, praesentium. Qui praesentium facere inventore
                    similique!</span
                >
            </template>

            <main>
                <UTable :rows="positions" :columns="columns">
                    <template #parent-data="{ row }">
                        {{ row.parent ?? "No parent positions" }}
                    </template>

                    <template #actions-data="{ row }">
                        <UDropdown :items="actionItems(row)">
                            <UButton
                                color="gray"
                                variant="ghost"
                                icon="i-heroicons-ellipsis-horizontal-20-solid"
                            />
                        </UDropdown>
                    </template>
                </UTable>
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
        key: "actions",
    },
];
const positions = [
    {
        name: "Director",
    },
    {
        name: "Deputy Director",
    },
    {
        name: "Head of Division",
    },
    {
        name: "Head of Subsection",
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
