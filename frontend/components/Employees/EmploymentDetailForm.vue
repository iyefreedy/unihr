<template>
    <UForm :state="state" :schema="schema" @submit="submit">
        <section class="flex flex-wrap -mx-4">
            <div class="px-4 mb-6">
                <h1>Employment data</h1>
                <p class="text-xs text-slate-600">
                    Fill all employee data information related to company
                </p>
            </div>

            <UFormGroup
                label="Employee ID"
                name="employee_id_number"
                class="flex-[0_0_auto] w-full px-4 py-2"
                required
            >
                <UInput v-model="state.employee_id_number" />
            </UFormGroup>
            <UFormGroup
                label="Employment Status"
                name="status"
                class="flex-[0_0_auto] w-full px-4 py-2"
                required
            >
                <USelect
                    v-model="state.status"
                    :options="statusOptions"
                    placeholder="Select employment status"
                />
            </UFormGroup>
            <UFormGroup
                label="Grade"
                name="grade"
                class="flex-[0_0_auto] w-full px-4 py-2"
                required
            >
                <USelect
                    v-model="state.grade"
                    :options="gradeOptions"
                    placeholder="Select grade"
                    @change="reset"
                />
            </UFormGroup>
            <UFormGroup
                label="Class"
                name="class"
                class="flex-[0_0_auto] w-full px-4 py-2"
                required
            >
                <USelect
                    v-model="state.rank"
                    :options="rankOptions"
                    :disabled="!state.grade"
                    placeholder="Select class"
                />
            </UFormGroup>
            <UFormGroup
                label="Position"
                name="position"
                class="flex-[0_0_auto] w-full px-4 py-2"
            >
                <USelect
                    v-model="state.position"
                    :options="positionOptions"
                    placeholder="Select position"
                />
            </UFormGroup>
            <UFormGroup
                label="Level"
                name="level"
                class="flex-[0_0_auto] w-full px-4 py-2"
            >
                <USelect
                    v-model="state.level"
                    :options="levelOptions"
                    placeholder="Select level"
                />
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

const props = defineProps<{ state: EmploymentDetail }>();
const emit = defineEmits<{ submit: [] }>();

const schema = Joi.object<EmploymentDetail>({
    employee_id_number: Joi.string().length(16).required().label("Employee ID"),
    grade: Joi.string().required(),
    rank: Joi.string().required(),
    join_date: Joi.date().required(),
    level: Joi.string().required(),
    organization: Joi.string().required(),
    position: Joi.string(),
    status: Joi.string().required(),
});

const reset = () => {
    props.state.rank = undefined;
};

const submit = () => {
    console.log("Submitted");
    emit("submit");
};

const statusOptions = ["probation", "contract", "permanent"];
const gradeOptions = [
    { label: "Gol. I", value: "gol-i" },
    { label: "Gol. II", value: "gol-ii" },
    { label: "Gol. III", value: "gol-iii" },
    { label: "Gol. IV", value: "gol-iv" },
];

const rankOptions = computed(() => {
    const grade = props.state.grade;
    switch (grade) {
        case "gol-i":
            return ["IA", "IB", "IC", "ID"];
        case "gol-ii":
            return ["IIA", "IIB", "IIC", "IID"];
        case "gol-iii":
            return ["IIIA", "IIIB", "IIIC", "IIID"];
        case "gol-iv":
            return ["IVA", "IVB", "IVC", "IVD"];
        default:
            return [""];
    }
});

const positionOptions = [
    {
        label: "Project Manager",
        value: "pm",
    },
    {
        label: "Web Developer",
        value: "wd",
    },
    {
        label: "Mobile programmer",
        value: "programmer",
    },
];

const levelOptions = [
    {
        label: "Director",
        value: "director",
    },
    {
        label: "Deputy Director",
        value: "deputy-director",
    },
    {
        label: "Head of division",
        value: "hod",
    },
];
</script>

<style></style>
