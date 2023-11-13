<template>
  <nav class="relative">
    <ol class="step-wrapper">
      <template v-for="(item, index) in steps" :key="item.id">
        <li class="step-item">
          <UButton :icon="currentStep > index ? 'i-mdi-check' : item.icon" :disabled="index > currentStep" size="xl"
            class="peer z-10 disabled:bg-opacity-100 disabled:opacity-100 disabled:bg-gray-100 disabled:text-slate-600 dark:disabled:bg-gray-900 dark:disabled:text-sky-400 dark:disabled:border dark:disabled:border-sky-400"
            variant="solid" :ui="{ rounded: 'rounded-full' }" @click="onStepClicked(index)" />
          <span class="mt-2 text-[10px] text-center md:text-xs lg:text-sm peer-disabled:text-slate-400 text-ellipsis">
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
  @apply flex justify-between mb-5;
}

.step-item {
  @apply relative flex flex-col items-center justify-center flex-[1] p-2 select-none overflow-hidden transition-colors duration-300;
}

.step-item::before {
  @apply content-[''] absolute w-full top-1/3 left-0 translate-y-1/2 border-t border-t-gray-300;
}
</style>