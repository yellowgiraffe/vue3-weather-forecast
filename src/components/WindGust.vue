<script setup>
import Card from 'primevue/card'

const props = defineProps({
  windGust: {
    type: [String, null],
    requiered: true
  }
})
</script>

<template>
  <section>
    <Card class="bg-gray-900" style="width: 20em">
      <template #subtitle>
        Wind gusts
      </template>
      <template #content>
        <div class="flex justify-content-between mb-4">
          <div v-if="props.windGust" class="text-4xl mr-4">{{ props.windGust }}<span class="text-sm">m/s</span></div>
          <div>
            <i class="pi pi-map-marker text-400 mr-1"></i>
            <div class="text-400">Learn more about gusts</div>
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>