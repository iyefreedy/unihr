<template>
    <UCard>
        <template #header>
            <div class="flex items-center justify-between gap-2">
                <div>
                    <h1 class="font-medium mb-2">Organizations</h1>
                    <p class="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eos quae, nihil nam ab ullam tenetur aspernatur
                        fuga repudiandae doloremque dolor.
                    </p>
                </div>

                <UButton
                    label="Create"
                    trailing-icon="i-mdi-plus"
                    size="xs"
                    @click="isOpen = !isOpen"
                />
            </div>
        </template>

        <div
            class="flex px-3 py-2 border-b border-gray-200 dark:border-gray-700"
        >
            <UInput v-model="q" placeholder="Filter people..." size="sm" />
        </div>
        <UTable :rows="rows" :columns="columns" />

        <div
            class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
        >
            <UPagination
                v-model="page"
                :page-count="pageCount"
                :total="filteredRows.length"
            />
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

<script setup>
const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
];
const {
    data: { value: organizations },
} = await useFetch("/api/organizations");

const q = ref("");
const isOpen = ref(false);
const processing = ref(false);

const toast = useToast();

const filteredRows = computed(() => {
    if (!q.value) {
        return organizations;
    }

    return organizations.value.filter((organization) => {
        return Object.values(organization).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase());
        });
    });
});

const page = ref(1);
const pageCount = 5;

const rows = computed(() => {
    return filteredRows.value.slice(
        (page.value - 1) * pageCount,
        page.value * pageCount
    );
});

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
