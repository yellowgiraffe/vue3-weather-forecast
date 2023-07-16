<script setup>
import Image from 'primevue/image'
import Card from 'primevue/card'

const props = defineProps({
  sun: {
    type: [Object, null],
    required: true
  }
})
</script>

<template>
  <Card class="bg-gray-900 min-h-full">
    <template #subtitle>
      Sunrise and sunset
    </template>
    <template #content>
      <div class="mb-4 flex justify-content-center align-items-center" style="min-height: 100px;">
        <Image
          :src="'./img/sun-moving.png'"
          alt=""
          width="100"
        />
      </div>
      <div class="flex justify-content-between mb-4">
        <div class="text-l font-semibold">
          <span class="text-yellow-300">Sunrise</span>
          <div class="text-xl">{{ props.sun?.sunrise }}</div>
        </div>
        <div class="text-l font-semibold">
          <span class="text-yellow-300">Sunset</span>
          <div class="text-xl">{{ props.sun?.sunset }}</div></div>
      </div>
    </template>
  </Card>
</template>