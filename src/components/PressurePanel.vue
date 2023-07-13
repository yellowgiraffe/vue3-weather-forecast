<script setup>
import Image from 'primevue/image'
import Card from 'primevue/card'

const props = defineProps({
  pressure: {
    type: [Number, null],
    required: true
  }
})
</script>

<template>
  <Card class="bg-gray-900 min-h-full" style="width: 20em">
    <template #subtitle>
      Pressure
    </template>
    <template #content>
      <div class="mb-4 flex justify-content-center align-items-center" style="min-height: 150px;">
        <Image
          :src="'./src/assets/img/barometer.png'"
          alt="Barometer icon"
          width="150"
        />
      </div>
      <div class="flex justify-content-center mb-4">
        <div class="text-4xl">{{ props.pressure }}<span class="text-sm">mm</span></div>
      </div>
    </template>
  </Card>
</template>