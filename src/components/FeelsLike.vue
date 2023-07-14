<script setup>
import Card from 'primevue/card'

const props = defineProps({
  feelsLike: {
    type: [String, null],
    requiered: true
  }
})
</script>

<template>
    <Card class="bg-gray-900 min-h-full">
      <template #subtitle>
        Feels like
      </template>
      <template #content>
        <div class="flex flex-column lg:flex-row justify-content-between">
          <div class="text-4xl mr-4 mb-4 lg:mb-0">{{ props.feelsLike }}<span class="text-sm">°C</span></div>
          <div>
            <i class="pi pi-info-circle text-400 mr-1"></i>
            <div class="text-400">How hot or cold it really feels</div>
          </div>
        </div>
      </template>
    </Card>
</template>