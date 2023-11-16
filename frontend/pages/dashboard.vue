<template>
    <div class="flex flex-wrap space-y-4">
        <UCard class="flex-[0_0_auto] w-full">
            <main class="space-y-10">
                <div>
                    <h1 class="mb-2">Welcome back, <br class="md:hidden" />Muhammad Quraisy!</h1>
                    <p class="text-sm text-slate-600 dark:text-slate-300">
                        It's Monday, 13 November
                    </p>
                </div>

                <div class="flex items-center py-4 space-x-4 overflow-x-scroll">
                    <UButton label="Request time off" variant="outline" />
                    <UButton label="Request overtime" variant="outline" />
                    <UDropdown :items="items" :popper="{ arrow: true }">
                        <UButton variant="outline" label="More requests"
                            trailing-icon="i-heroicons-chevron-down-20-solid" />
                    </UDropdown>
                </div>
            </main>
        </UCard>
        <UCard class="flex-[0_0_auto] w-1/3">
            <main class="space-y-10">
                <UMeterGroup :max="320">
                    <template #indicator>
                        <div class="flex gap-1.5 justify-between text-sm">
                            <p>Total</p>
                            <p class="text-gray-500 dark:text-gray-400">
                                320 employees
                            </p>
                        </div>
                    </template>

                    <UMeter :value="250" color="green" label="Permanent" icon="i-heroicons-cog-6-tooth" />
                    <UMeter :value="40" color="yellow" label="Probation" icon="i-heroicons-window" />
                    <UMeter :value="10" color="red" label="Contract" icon="i-heroicons-document" />
                    <UMeter :value="20" color="gray" label="Intern" icon="i-heroicons-film" />
                </UMeterGroup>
            </main>
        </UCard>
    </div>
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
