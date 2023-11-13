<template>
    <UCard>
        <template #header>
            <dd class="mx-auto text-center">
                <svg class="h-20 w-20 text-gray-300 mx-auto" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd" />
                </svg>

            </dd>
            <dd class="mt-1 text-sm text-center leading-6 text-gray-900 sm:col-span-2 sm:mt-0  dark:text-slate-100">
                Muhammad Quraisy
            </dd>
            <dd class="mt-1 text-xs text-center leading-6 text-gray-700 sm:col-span-2 sm:mt-0  dark:text-slate-400">
                18.00.0.0.0031
            </dd>
        </template>
        <UTabs :items="items" class="w-full">
            <template #default="{ item, index, selected }">
                <div class="flex items-center gap-2 relative truncate">
                    <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

                    <span class="truncate hidden md:inline">{{ item.label }}</span>

                    <span v-if="selected"
                        class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
                </div>
            </template>
            <template #personal>
                <UCard>
                    <template #header>
                        <h3 class="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                            Personal Information
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Personal details and basic information.
                        </p>
                    </template>

                    <main>
                        <dl class="divide-y divide-gray-100 dark:divide-gray-800">
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100 ">
                                    Email address
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300 ">
                                    margotfoster@example.com
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Phone
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    087880688799
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Gender
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Male
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Birthday
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    21 Apr 1998
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Birth place
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Bogor
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Address
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Gg. Tiang 2 RT.004/02 No.52 Kec. Bojong Gede, Kab. Bogor
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Religion
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Islam
                                </dd>
                            </div>
                        </dl>
                    </main>
                </UCard>
            </template>

            <template #employment="{ item }">
                <UCard>
                    <template #header>
                        <h3 class="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                            Employment detail
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Personal information related to company.
                        </p>
                    </template>

                    <main>
                        <dl class="divide-y divide-gray-100 dark:divide-gray-800">

                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Position
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Backend Developer
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Level
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Staff
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Organization
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Pusat Komputer dan Inovasi Digital
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Grade & Rank
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Golongan III-A
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Approval Line
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Dr. Ade Jamal
                                </dd>
                            </div>
                        </dl>
                    </main>
                </UCard>
            </template>

            <template #family>
                <UCard>
                    <template #header>
                        <h3 class="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                            Family Information
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Family relation with employee.
                        </p>
                    </template>

                    <main>
                        <dl class="divide-y divide-gray-100 dark:divide-gray-800">
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Father
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Az Nizwar
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Mother
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Rumyati
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Brother
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Ahmad Khadafi
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Sister
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Shakila Maulida
                                </dd>
                            </div>
                        </dl>
                    </main>
                </UCard>
            </template>

            <template #education>
                <UCard>
                    <template #header>
                        <h3 class="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                            Education Information
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Education information employee.
                        </p>
                    </template>

                    <main>
                        <dl class="divide-y divide-gray-100 dark:divide-gray-800">
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Indraprasta PGRI University
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Bachelor Degree of Computer Science
                                </dd>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    2018-2023
                                </dd>

                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Wira Buana 2 Highschool
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Software Engineering
                                </dd>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    2013-2016
                                </dd>
                            </div>
                        </dl>
                    </main>
                </UCard>
            </template>

            <template #job>
                <UCard>
                    <template #header>
                        <h3 class="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100">
                            Job Information
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Job experience information.
                        </p>
                    </template>

                    <main>
                        <dl class="divide-y divide-gray-100 dark:divide-gray-800">
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    Al-Azhar Indonesia University
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Service Staff
                                </dd>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Mar 2018 - Mar 2023
                                </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                                    PT. Sinar Karya Rakindo
                                </dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Warehouse Staff
                                </dd>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-slate-300">
                                    Jul 2016 - Jul 2017
                                </dd>
                            </div>
                        </dl>
                    </main>
                </UCard>
            </template>
        </UTabs>
    </UCard>
</template>

<script lang="ts" setup>
const items = [
    {
        slot: "personal",
        label: "Personal Detail",
        icon: 'i-mdi-card-account-details'
    },
    {
        slot: "employment",
        label: "Employment Detail",
        icon: 'i-mdi-account-tie'
    },
    {
        slot: "family",
        label: "Family Information",
        icon: 'i-mdi-family-tree'
    },
    {
        slot: "education",
        label: "Education Information",
        icon: 'i-mdi-account-school'
    },
    {
        slot: "job",
        label: "Job Information",
        icon: 'i-mdi-briefcase'
    },
];
</script>

<style></style>
