<template>
  <nav class="relative">
    <ol class="flex justify-between p-3 mb-5">
      <template v-for="item in steps" :key="item.id">
        <li
          class="relative flex flex-col items-center justify-center flex-[1] p-5 select-none transition-colors duration-300 before:content-[''] before:absolute before:w-full before:top-1/2 before:left-0 before:translate-y-1/2 before:border-t before:border-t-gray-300">
          <UButton icon="i-mdi-account" size="xl" class="z-10" :variant="item.id === currentStep ? 'solid' : 'ghost'"
            :ui="{ rounded: 'rounded-full' }" @click="currentStep = item.id" />
          <span class="text-sm">{{ item.title }}</span>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
interface StepperProps {
  steps: any[];
  currentStep?: Number;
}
const props = withDefaults(defineProps<StepperProps>(), {
  steps: () => [],
  currentStep: () => 1
})

const emits = defineEmits<{ change: [id: number] }>()

</script>

<style></style>

