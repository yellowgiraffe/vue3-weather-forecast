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
  <Card class="bg-gray-900" style="width: 20em">
    <template #subtitle>
      Wind
    </template>
    <template #content>
      <div class="mb-4 flex justify-content-center align-items-center">
        <Image
          :src="'./src/assets/img/equalizer.png'"
          alt="Wind icon"
          width="150"
        />
      </div>
      <div class="flex justify-content-between mb-4">
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