<script setup>
import Card from 'primevue/card';
import Image from 'primevue/image'

const props = defineProps({
  coords: {
    type: [Object, null],
    required: true
  }
})
</script>

<template>
  <Card class="min-h-full">
    <template #content>
      <div class="flex flex-column sm:flex-row align-items-center gap-4">
        <Image
          :src="'./img/compass.png'"
          alt="Wind icon"
          width="150"
        />
        <div>
          <h3 class="text-2xl">Longitude: {{ props.coords?.lon }}</h3>
          <p class="text-lg mb-4">
            Longitude measures distance east or west of the prime meridian.
          </p>
          <h3 class="text-2xl">Latitude: {{ props.coords?.lat }}</h3>
          <p class="text-lg">
            Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator.
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>