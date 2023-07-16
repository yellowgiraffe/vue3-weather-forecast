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
  <Card class="bg-gray-900 min-h-full">
    <template #subtitle>
      Pressure
    </template>
    <template #content>
      <div class="mb-4 flex justify-content-center align-items-center" style="min-height: 100px;">
        <Image
          :src="'./img/barometer.png'"
          alt="Barometer icon"
          width="100"
        />
      </div>
      <div class="flex justify-content-center mb-4">
        <div class="text-4xl">{{ props.pressure }}<span class="text-sm">mm</span></div>
      </div>
    </template>
  </Card>
</template>