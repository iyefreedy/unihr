<template>
    <UForm :state="state" @submit="submit">
        <UFormGroup label="Employee" name="employee">
            <USelectMenu
                searchable
                searchable-placeholder="Search an employee..."
                :disabled="pending"
                class="w-full lg:w-40"
                placeholder="Select an employee"
                :options="employees"
                v-model="state.employee"
                :value="selectedEmployee"
                option-attribute="name"
                @change="console.log($event)"
            />
        </UFormGroup>

        <UButton type="submit" label="Next" />
    </UForm>
</template>

<script lang="ts" setup>
const route = useRoute();
const query = route.query;

const search = useDebounceRef("", 500, false);
const limit = ref(5);
const { data: employees, pending } = await useLazyAsyncData<Employee[]>(
    "employees",
    () =>
        ($fetch as any)("/api/employees", {
            query: {
                q: search.value,

                _limit: limit.value,
            },
        }),
    {
        default: () => [],
        watch: [search, limit],
    }
);
const selectedEmployee = computed(async () => {
    const { data: employee } = await useLazyAsyncData<Employee>(
        "employees.id",
        () => ($fetch as any)(`/api/employees/${query.employee_id}`),
        {
            default: () => {},
            immediate: true,
        }
    );

    console.log(employee);

    return employee;
});
const state = reactive({
    employee: selectedEmployee.value,
});
const submit = () => {
    console.log(state);
};
</script>

<style></style>
