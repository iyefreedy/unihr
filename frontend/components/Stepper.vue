<template>
    <nav class="relative">
        <ol class="step-wrapper">
            <template v-for="(item, index) in steps" :key="item.id">
                <li class="step-item">
                    <UButton
                        :icon="item.icon"
                        :disabled="index > currentStep"
                        size="xl"
                        class="peer z-10 disabled:text-slate-400 disabled:bg-white disabled:border"
                        variant="solid"
                        :ui="{ rounded: 'rounded-full bg-white' }"
                        @click="onStepClicked(index)"
                    />
                    <span
                        class="text-xs text-center md:text-sm peer-disabled:text-slate-400"
                    >
                        {{ item.label }}
                    </span>
                </li>
            </template>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
interface Step {
    label: string;
    icon: string;
}
interface StepperProps {
    steps: Step[];
    currentStep: number;
}
const props = withDefaults(defineProps<StepperProps>(), {
    steps: () => [],
});

const emit = defineEmits<{ change: [index: number] }>();

const onStepClicked = (index: number) => {
    emit("change", index);
};
</script>

<style lang="postcss" scoped>
.step-wrapper {
    @apply flex justify-between p-3 mb-5;
}

.step-item {
    @apply relative flex flex-col items-center justify-center flex-[1] p-2 select-none overflow-hidden transition-colors duration-300;
}

.step-item::before {
    @apply content-[''] absolute w-full top-1/3 left-0 translate-y-1/2 border-t border-t-gray-300;
}
</style>
