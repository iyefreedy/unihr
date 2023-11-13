<template>
    <ul>
        <li class="mb-4">
            <h6 class="font-semibold text-sm mb-2">Home</h6>
            <ul class="ml-3">
                <li>
                    <NuxtLink to="/dashboard" class="flex items-center p-1 text-sm">
                        <UIcon name="i-mdi-view-dashboard" />
                        <span class="ml-2">Dashboard</span>
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/my-team" href="#" class="flex items-center p-1 text-sm">
                        <UIcon name="i-mdi-account-group" />
                        <span class="ml-2">My Team</span>
                    </NuxtLink>
                </li>
            </ul>
        </li>
        <li class="mb-4">
            <h6 class="font-semibold text-sm mb-2">Info</h6>
            <ul class="ml-3">
                <li>
                    <a href="#" class="flex items-center p-1 text-sm">
                        <UIcon name="i-mdi-calendar-clock" />
                        <span class="ml-2">Attendances</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-1 text-sm">
                        <UIcon name="i-mdi-exit-run" />
                        <span class="ml-2">Leave Permit</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-1 text-sm">
                        <UIcon name="i-mdi-clock-alert" />
                        <span class="ml-2">Overtime</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="mb-4">
            <h6 class="font-semibold text-sm mb-2">Benefit</h6>
            <ul class="ml-3">
                <li>
                    <a href="#" class="flex items-center p-1 text-sm">
                        <UIcon name="i-mdi-cash" />
                        <span class="ml-2">Payroll</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-1 text-sm">
                        <UIcon name="i-mdi-cash-refund" />
                        <span class="ml-2">Reimburse</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script lang="ts" setup></script>

<style></style>
