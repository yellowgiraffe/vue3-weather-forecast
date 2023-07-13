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
  <section>
    <Card class="bg-gray-900" style="width: 20em">
      <template #subtitle>
        Feels like
      </template>
      <template #content>
        <div class="flex justify-content-between mb-4">
          <div class="text-4xl mr-4">{{ props.feelsLike }}<span class="text-sm">°C</span></div>
          <div>
            <i class="pi pi-map-marker text-400 mr-1"></i>
            <div class="text-400">How hot or cold it really feels</div>
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>