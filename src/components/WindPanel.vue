<script setup>
import Card from 'primevue/card'
import Image from 'primevue/image'

const props = defineProps({
  wind: {
    type: [Object, null],
    required: true
  }
})
</script>

<template>
  <Card class="bg-gray-900 min-h-full">
    <template #subtitle>
      Wind
    </template>
    <template #content>
      <div class="mb-4 flex justify-content-center align-items-center" style="min-height: 100px;">
        <Image
          :src="'./img/equalizer.png'"
          alt="Wind icon"
          width="100"
        />
      </div>
      <div class="flex flex-column md:flex-row justify-content-between text-center mb-4">
        <div class="text-4xl">
          {{ props.wind?.speed }}<span class="text-sm">m/s</span>
        </div>
        <div class="text-4xl">
          {{ props.wind?.deg }}<span class="text-sm">deg</span>
        </div>
      </div>
    </template>
  </Card>
</template>