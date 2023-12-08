<template>
    <UCard>
        <template #header>
            <div class="flex items-center">
                <UButton
                    icon="i-mdi-arrow-left"
                    class="mr-4"
                    variant="ghost"
                    @click="router.back()"
                />
                <div>
                    <h1 class="md:text-xl">Employee</h1>
                    <span
                        class="text-xs text-slate-600 dark:text-slate-100 md:text-sm"
                        >Add new employee</span
                    >
                </div>
            </div>
        </template>

        <section class="px-4">
            <Stepper
                :steps="steps"
                :current-step="currentStep"
                @change="changeStep"
            />

            <UDivider class="mb-2" />

            <template v-if="currentStep === 0">
                <EmployeesPersonalDetailForm
                    :state="state.personalDetail"
                    @submit="nextStep"
                />
            </template>

            <template v-else-if="currentStep === 1">
                <EmployeesEmploymentDetailForm
                    :state="state.employmentDetail"
                    @submit="nextStep"
                />
            </template>
            <template v-else-if="currentStep === 2">
                <h1>Education Infomation</h1>
            </template>
            <template v-else-if="currentStep === 3">
                <h1>Education Infomation</h1>
            </template>
        </section>
    </UCard>
</template>

<script lang="ts" setup>
const router = useRouter();

const personalDetail = reactive<PersonalDetail>({
    identity_number: undefined,
    name: undefined,
    email: undefined,
    phone: undefined,
    birth_date: undefined,
    birth_place: undefined,
    gender: undefined,
    marital_status: undefined,
    blood_type: undefined,
    religion: undefined,
    address: undefined,
    postal_code: undefined,
    city: undefined,
    photo: undefined,
    province: undefined,
});

const employmentDetail = reactive({
    employee_id_number: undefined,
    join_date: undefined,
    level: undefined,
    organization: undefined,
    position: undefined,
    status: undefined,
    grade: undefined,
    rank: undefined,
});

const state = reactive({
    personalDetail: personalDetail,
    employmentDetail: employmentDetail,
});

const steps = [
    {
        label: "Personal Information",
        icon: "i-mdi-card-account-details",
    },
    {
        label: "Employment Information",
        icon: "i-mdi-briefcase",
    },
    {
        label: "Payroll",
        icon: "i-mdi-cash-multiple",
    },
    {
        label: "Family Information",
        icon: "i-mdi-account-group",
    },
];

const currentStep = ref(0);

const changeStep = (index: number) => {
    currentStep.value = index;
};

const nextStep = () => {
    const nextStep = currentStep.value + 1;
    changeStep(nextStep);
};
</script>

<style></style>
