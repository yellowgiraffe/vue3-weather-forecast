<script setup>
import Card from 'primevue/card'

const props = defineProps({
  cloudiness: {
    type: [Number, null],
    requiered: true
  }
})
</script>

<template>
  <Card class="bg-gray-900 min-h-full">
    <template #subtitle>
      Cloudiness
    </template>
    <template #content>
      <div class="flex flex-column lg:flex-row justify-content-between">
        <div class="text-4xl mr-4 mb-4 lg:mb-0">{{ props.cloudiness }}<span class="text-sm">%</span></div>
        <div>
          <i class="pi pi-cloud text-400 mr-1"></i>
          <div class="text-400">The sky fraction obscured by clouds</div>
        </div>
      </div>
    </template>
  </Card>
</template>