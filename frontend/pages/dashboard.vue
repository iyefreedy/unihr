<template>
    <div class="grid grid-cols-4">
        <div class="col-span-4 w-full p-3">
            <UCard>
                <main class="space-y-10">
                    <div>
                        <h1 class="mb-2">
                            Welcome back, <br class="md:hidden" />Muhammad
                            Quraisy!
                        </h1>
                        <p class="text-sm text-slate-600 dark:text-slate-300">
                            It's Monday, 13 November
                        </p>
                    </div>

                    <div
                        class="flex items-center py-4 space-x-4 overflow-x-scroll"
                    >
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
                </main>
            </UCard>
        </div>
        <div class="col-span-2 p-3">
            <UCard class="h-full">
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

                        <UMeter :value="250" color="green" label="Permanent" />
                        <UMeter :value="40" color="yellow" label="Probation" />
                        <UMeter :value="10" color="red" label="Contract" />
                        <UMeter :value="20" color="gray" label="Intern" />
                    </UMeterGroup>
                </main>
            </UCard>
        </div>

        <div class="col-span-2 p-3">
            <UCard>
                <BarChart :data="chartBarData" :options="chartOptions" />
            </UCard>
        </div>
        <div class="p-3">
            <UCard>
                <DoughnutChart
                    :data="chartDoughnutData"
                    :options="chartOptions"
                />
            </UCard>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: ["auth"] });
const chartBarData = {
    labels: ["January", "February", "March"],
    datasets: [
        {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 12],
        },
        {
            label: "Data Two",
            backgroundColor: "#f123f1",
            data: [40, 20, 12],
        },
    ],
};
const chartOptions = {
    responsive: true,
};

const chartDoughnutData = {
    labels: ["Male", "Female"],
    datasets: [
        {
            backgroundColor: ["#41B883", "#E46651"],
            data: [112, 208],
        },
    ],
};
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
