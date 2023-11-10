<template>
  <UCard>
    <template #header>
      <div class="flex items-center">
        <UButton icon="i-mdi-arrow-left" class="mr-4" @click="router.back()" />
        <span>Add new employee</span>
      </div>
    </template>

    <div>
      <Stepper :steps="steps" />
      <div class="flex flex-wrap">
        <div class="p-4 flex-[0_0_auto] w-full">
          <label for="nipField">NIP</label>
          <UInput id="nipField" v-model="form.nip" disabled placeholder="00.00.0.0.0000" />
        </div>

        <div class="p-4 flex-[0_0_auto] w-full">
          <label for="nameField">Name</label>
          <UInput id="nameField" v-model="form.name" placeholder="John Doe" />
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="p-4 flex-[0_0_auto] w-full md:w-1/2">
          <label for="birthDateField">Birth Date</label>
          <!-- <UInput type="date" id="birthDateField" v-model="form.birthDate" placeholder="1970-12-31" /> -->
          <UPopover :popper="{ placement: 'bottom-start' }">
            <UButton icon="i-heroicons-calendar-days-20-solid" :label="label" class="w-full" variant="outline"
              color="gray" />

            <template #panel="{ close }">
              <LazyDatePicker v-model="date" @close="close" />
            </template>
          </UPopover>
        </div>

        <div class="p-4 flex-[0_0_auto] w-full md:w-1/2">
          <label for="birthPlaceField">Birth Place</label>
          <UInput id="birthPlaceField" v-model="form.birthPlace" placeholder="E.g: Bogor, Jakarta" />
        </div>
      </div>


    </div>

  </UCard>
</template>

<script lang="ts" setup>
const router = useRouter()
const date = ref(new Date())
const label = computed(() => date.value.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })
)
const form = reactive({
  nip: '18.00.0.0.0031',
  name: '',
  birthDate: date.value,
  birthPlace: '',
})

const steps = [
  {
    id: 1,
    title: 'Personal Information',
  },
  {
    id: 2,
    title: 'Education Information',
  },
  {
    id: 3,
    title: 'Job Information',
  },
  {
    id: 4,
    title: 'Family Information',
  },
];
</script>

<style></style>

