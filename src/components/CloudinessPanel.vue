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
  <Card class="bg-gray-900" style="width: 20em">
    <template #subtitle>
      Cloudiness
    </template>
    <template #content>
      <div class="flex justify-content-between mb-4">
        <div class="text-4xl mr-4">{{ props.cloudiness }}<span class="text-sm">%</span></div>
        <div>
          <i class="pi pi-map-marker text-400 mr-1"></i>
          <div class="text-400">The sky fraction obscured by clouds</div>
        </div>
      </div>
    </template>
  </Card>
</template>