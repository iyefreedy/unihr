<template>
    <UCard>
        <template #header>
            <div class="flex items-center">
                <UButton icon="i-mdi-arrow-left" class="mr-4" variant="ghost" @click="router.back()" />
                <div>
                    <h1 class="md:text-xl">Employee</h1>
                    <span class="text-xs text-slate-600 dark:text-slate-100 md:text-sm">Add new employee</span>
                </div>
            </div>
        </template>

        <section class="px-4">
            <Stepper :steps="steps" :current-step="currentStep" @change="changeStep" />

            <UDivider class="mb-2" />

            <template v-if="currentStep === 0">
                <EmployeesPersonalInformationForm :state="state.personalInformation" @submit="nextStep" />
            </template>

            <template v-else-if="currentStep === 1">
                <EmployeesEmploymentInfomation :state="state.employmentInformation" @submit="nextStep" />
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

const personalInformation = reactive<PersonalDetail>({
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

const employmentInformation = reactive({
    employee_id_number: undefined,
    join_date: undefined,
    level: undefined,
    organization: undefined,
    position: undefined,
    status: undefined,
    grade: undefined,
    class: undefined,
});

const state = reactive({
    personalInformation,
    employmentInformation,
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
        label: "Job Information",
        icon: "i-mdi-account-tie",
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
