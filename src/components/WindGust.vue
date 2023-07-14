<script setup>
import Card from 'primevue/card'

const props = defineProps({
  windGust: {
    type: [Number, null],
    requiered: true
  }
})
</script>

<template>
    <Card class="bg-gray-900 min-h-full">
      <template #subtitle>
        Wind gusts
      </template>
      <template #content>
        <div class="flex flex-column lg:flex-row justify-content-between">
          <div v-if="props.windGust" class="text-4xl mr-4 mb-4 lg:mb-0">{{ props.windGust }}<span class="text-sm">m/s</span></div>
          <div>
            <i class="pi pi-exclamation-triangle text-400 mr-1"></i>
            <div class="text-400">Learn <a class="text-blue-800" href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5" target="_blank">more</a> about gusts</div>
          </div>
        </div>
      </template>
    </Card>
</template>