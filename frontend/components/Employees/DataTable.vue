<template>
    <UTable :rows="rows" :columns="columns">
        <template #gender-header="{ column, sort }">
            <UDropdown
                :items="genderItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <UButton
                    color="white"
                    label="Options"
                    trailing-icon="i-heroicons-chevron-down-20-solid"
                />
            </UDropdown>
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
            <UIcon
                :name="
                    row.gender.value === 'male'
                        ? 'i-mdi-gender-male'
                        : 'i-mdi-gender-female'
                "
                class="rounded-full p-2"
                :class="
                    row.gender.value === 'male' ? 'bg-blue-500' : 'bg-pink-500'
                "
            />
        </template>
    </UTable>
</template>

<script lang="ts" setup>
interface GenderProps {
    value: string;
    class: string;
}

type Employee = {
    id: number;
    name: string;
    organization: string;
    gender: GenderProps;
    status: string;
};

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
    { key: "name", label: "Name", class: "min-w-[200px]" },
    { key: "gender", label: "Gender", class: "text-center" },
    { key: "organization", label: "Organization" },
    { key: "status", label: "Status", class: "text-center" },
];

const props = defineProps<{ employees: Employee[] | null }>();

const q = ref("");
const page = ref(1);
const pageCount = 5;

const filteredRows = computed(() => {
    if (!q.value) {
        return props.employees;
    }

    return props.employees?.filter((employee) => {
        return Object.values(employee).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase());
        });
    });
});

const rows = computed(() => {
    return filteredRows.value?.slice(
        (page.value - 1) * pageCount,
        page.value * pageCount
    );
});
</script>

<style></style>
