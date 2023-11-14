<template>
    <UCard>
        <template #header>
            <h1 class="mb-2">Welcome back, Muhammad Quraisy!</h1>
            <p class="mb-4 text-sm text-slate-600 dark:text-slate-300">
                It's Monday, 13 November
            </p>
            <div class="flex items-center space-x-4">
                <UButton label="Request time off" variant="outline" />
                <UButton label="Request overtime" variant="outline" />
                <UDropdown :items="items" :popper="{ arrow: true }">
                    <UButton
                        variant="outline"
                        label="More requests"
                        trailing-icon="i-heroicons-chevron-down-20-solid"
                    />
                </UDropdown>
            </div>
        </template>
    </UCard>
</template>

<script lang="ts" setup>
const items = [
    [
        {
            label: "Attendance",
        },
        {
            label: "Change shift",
        },
    ],
];
</script>

<style></style>
