<template>
    <UForm :state="state" :schema="schema" @submit="submit">
        <section class="flex flex-wrap -mx-4">
            <div class="px-4 mb-6">
                <h1>Personal data</h1>
                <p class="text-xs text-slate-600">
                    Fill all employee personal basic information data
                </p>
            </div>

            <UFormGroup class="flex-[0_0_auto] w-full px-4 py-2">
                <input
                    ref="inputFile"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    @change="change"
                />
                <div class="flex items-center gap-x-3">
                    <template v-if="image">
                        <UAvatar :src="image" size="3xl" />
                    </template>
                    <template v-else>
                        <svg
                            class="h-20 w-20 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </template>

                    <UButton
                        type="button"
                        label="Change"
                        class="px-2.5 py-1.5 text-sm"
                        @click="($refs.inputFile as HTMLInputElement).click()"
                    />
                </div>
            </UFormGroup>

            <UFormGroup
                label="Identity Number"
                name="nik"
                required
                class="flex-[0_0_auto] w-full px-4 py-2"
                help="ID Number isi in your citizen ID Card"
            >
                <UInput
                    v-model="state.identity_number"
                    placeholder="3201654578982123"
                />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <UFormGroup
                label="Name"
                name="name"
                required
                class="flex-[0_0_auto] w-full px-4 py-2"
            >
                <UInput v-model="state.name" placeholder="John Doe" />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <!-- Row 2 -->

            <UFormGroup
                label="Email"
                name="email"
                required
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
            >
                <UInput
                    type="email"
                    v-model="state.email"
                    placeholder="john.doe@example.com"
                />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <UFormGroup
                label="Phone"
                name="phone"
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
            >
                <UInput
                    type="phone"
                    v-model="state.phone"
                    placeholder="E.g: +622183616766"
                />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <!-- Row 4 -->
            <UFormGroup
                label="Birth Date"
                name="birth_date"
                required
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
            >
                <UInput type="date" v-model="state.birth_date" />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <UFormGroup
                label="Birth place"
                name="birth_place"
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
            >
                <UInput v-model="state.birth_place" placeholder="E.g: Bogor" />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <!-- Row 5 -->

            <UFormGroup
                label="Gender"
                name="gender"
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
            >
                <URadio
                    v-for="option in genderOptions"
                    :key="option.value"
                    v-model="state.gender"
                    v-bind="option"
                    class="inline-flex first:mr-8"
                >
                    {{ option.label }}
                </URadio>

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <UFormGroup
                label="Marital status"
                name="marital_status"
                required
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
            >
                <USelect
                    placeholder="Select status"
                    :options="maritalStatusOptions"
                    v-model="state.marital_status"
                />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <!-- Row 6 -->

            <UFormGroup
                label="Blood type"
                name="blood_type"
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
            >
                <USelect
                    placeholder="Select blood type"
                    :options="['A', 'B', 'AB', 'O']"
                    v-model="state.blood_type"
                />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <UFormGroup
                label="Religion"
                required
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
                name="religion"
            >
                <USelect
                    placeholder="Select religion"
                    :options="religionOptions"
                    v-model="state.religion"
                />

                <template #error="{ error }">
                    <span class="text-xs">{{ error }}</span>
                </template>
            </UFormGroup>

            <UFormGroup
                label="Address"
                required
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
                name="address"
            >
                <UTextarea v-model="state.address" />
            </UFormGroup>

            <UFormGroup
                label="Province"
                required
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
                name="province"
            >
                <USelectMenu
                    searchable
                    :options="provinces"
                    v-model="state.province"
                    option-attribute="name"
                    value-attribute="name"
                    placeholder="Select province"
                    @click="execute"
                />
            </UFormGroup>

            <UFormGroup
                label="City"
                required
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
                name="city"
            >
                <UTextarea v-model="state.city" />
            </UFormGroup>

            <UFormGroup
                label="Postal code"
                class="flex-[0_0_auto] w-full px-4 py-2 md:w-1/2"
                name="postal_code"
            >
                <UInput v-model="state.postal_code" />
            </UFormGroup>
        </section>

        <div class="w-full py-2 mt-4">
            <UButton
                type="submit"
                label="Next"
                block
                icon="i-mdi-arrow-right-bold-circle"
                trailing
            />
        </div>
    </UForm>
</template>

<script lang="ts" setup>
import Joi from "joi";

const schema = Joi.object({
    nik: Joi.string().length(16).required().length(16).label("Identity Number"),
    name: Joi.string().required().label("Name"),
    email: Joi.string().email({ tlds: false }).required().label("Email"),
    phone: Joi.string(),
    birth_date: Joi.date().required().label("Birth date"),
    birth_place: Joi.string(),
    gender: Joi.string().required(),
    marital_status: Joi.string().required().label("Marital status"),
    blood_type: Joi.string(),
    religion: Joi.string().required().label("Religion"),
    address: Joi.string().required().label("Address"),
    postal_code: Joi.string(),
    province: Joi.string(),
    city: Joi.string(),
});

const props = defineProps<{ state: PersonalInformationStateProps }>();
const emit = defineEmits<{ submit: [] }>();

const submit = () => {
    emit("submit");
};

const image = ref<string | undefined>(undefined);

const change = (event: Event) => {
    const target = event.target;

    if (target === null) return;

    const fileList = (target as HTMLInputElement | null)?.files;

    if (fileList && fileList[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            image.value = e.target?.result as string;
        };

        reader.readAsDataURL(fileList[0]);
        props.state.photo = fileList[0];
    }
};

const { data: provinces, execute } = await useAsyncData<any[]>(
    "provinces",
    () => $fetch("/provinces.json"),
    {
        default: () => [],
    }
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
</script>

<style></style>
