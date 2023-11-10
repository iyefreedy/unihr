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
                <span>Add new employee</span>
            </div>
        </template>

        <div>
            <Stepper
                :steps="steps"
                :current-step="currentStep"
                @change="changeStep"
            />

            <template v-if="currentStep === 0">
                <!-- Row 1 -->
                <div class="flex flex-wrap">
                    <div class="px-4 py-2 flex-[0_0_auto] w-full">
                        <UFormGroup label="Name" required>
                            <UInput
                                v-model="form.name"
                                placeholder="John Doe"
                            />
                        </UFormGroup>
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="flex flex-wrap">
                    <div class="px-4 py-2 flex-[0_0_auto] w-full">
                        <UFormGroup label="Email" required>
                            <UInput
                                type="email"
                                v-model="form.email"
                                placeholder="john.doe@example.com"
                            />
                        </UFormGroup>
                    </div>
                </div>

                <!-- Row 3 -->
                <div class="flex flex-wrap">
                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <UFormGroup label="Mobile phone">
                            <UInput
                                type="phone"
                                v-model="form.birthPlace"
                                placeholder="E.g: +6289811223344"
                            />
                        </UFormGroup>
                    </div>

                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <UFormGroup label="Phone">
                            <UInput
                                id="birthPlaceField"
                                v-model="form.birthPlace"
                                placeholder="E.g: +622183616766"
                            />
                        </UFormGroup>
                    </div>
                </div>

                <!-- Row 4 -->
                <div class="flex flex-wrap">
                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <UFormGroup label="Birth Date" required>
                            <UInput type="date" v-model="form.birthDate" />
                        </UFormGroup>
                    </div>

                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <label for="birthPlaceField" class="text-sm"
                            >Birth Place</label
                        >
                        <UInput
                            id="birthPlaceField"
                            v-model="form.birthPlace"
                            placeholder="E.g: Bogor"
                        />
                    </div>
                </div>

                <!-- Row 5 -->
                <div class="flex flex-wrap">
                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <UFormGroup label="Gender" name="gender">
                            <URadio
                                v-for="option in genderOptions"
                                :key="option.value"
                                v-model="form.gender"
                                v-bind="option"
                                class="inline-flex last:ml-8"
                            >
                                {{ option.label }}
                            </URadio>
                        </UFormGroup>
                    </div>

                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <UFormGroup label="Marital status" required>
                            <USelect
                                placeholder="Select status"
                                :options="maritalStatusOptions"
                                v-model="form.marital_status"
                            />
                        </UFormGroup>
                    </div>
                </div>

                <!-- Row 6 -->
                <div class="flex flex-wrap">
                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <UFormGroup label="Blood type" name="blood_type">
                            <USelect
                                placeholder="Select blood type"
                                :options="['A', 'B', 'AB', 'O']"
                                v-model="form.blood_type"
                            />
                        </UFormGroup>
                    </div>

                    <div class="px-4 py-2 flex-[0_0_auto] w-full md:w-1/2">
                        <UFormGroup label="Religion" required>
                            <USelect
                                placeholder="Select religion"
                                :options="religionOptions"
                                v-model="form.religion"
                            />
                        </UFormGroup>
                    </div>
                </div>
            </template>

            <template v-else-if="currentStep === 1">
                <h1>Education Infomation</h1>
            </template>
            <template v-else-if="currentStep === 2">
                <h1>Education Infomation</h1>
            </template>
            <template v-else-if="currentStep === 3">
                <h1>Education Infomation</h1>
            </template>

            <div class="ml-auto p-4">
                <template v-if="currentStep === steps.length - 1">
                    <UButton
                        label="Submit"
                        block
                        icon="i-mdi-check"
                        trailing
                        @click="console.log('Submit')"
                    />
                </template>
                <template v-else>
                    <UButton
                        label="Next"
                        block
                        icon="i-mdi-arrow-right"
                        trailing
                        @click="nextStep"
                    />
                </template>
            </div>
        </div>
    </UCard>
</template>

<script lang="ts" setup>
const router = useRouter();

const currentDate = ref<Date>(new Date());
const birthDatelabel = computed(() =>
    currentDate.value?.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
);

const genderOptions = [
    {
        label: "Male",
        value: "male",
    },
    {
        label: "Female",
        value: "female",
    },
];

const maritalStatusOptions = [
    {
        label: "Single",
        value: "single",
    },
    {
        label: "Married",
        value: "married",
    },
    {
        label: "Widow",
        value: "widow",
    },
    {
        label: "Widower",
        value: "widower",
    },
];

const religionOptions = [
    {
        label: "Islam",
        value: "islam",
    },
    {
        label: "Christian",
        value: "christian",
    },
    {
        label: "Buddha",
        value: "buddha",
    },
    {
        label: "Hindu",
        value: "hindu",
    },
];

const form = reactive({
    name: "",
    email: "",
    birthDate: "",
    birthPlace: "",
    gender: undefined,
    marital_status: undefined,
    blood_type: undefined,
    religion: undefined,
});

const disabledNextStep = computed(() => {
    switch (currentStep.value) {
        case 0:
            return;
    }
});

const steps = [
    {
        label: "Personal Information",
        icon: "i-mdi-card-account-details",
    },
    {
        label: "Education Information",
        icon: "i-mdi-account-school",
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
    if (!form.name) return;
    const nextStep = currentStep.value + 1;
    changeStep(nextStep);
};
</script>

<style></style>
