<script setup>
import Card from 'primevue/card';
import Image from 'primevue/image'

const props = defineProps({
  humidity: Number
})
</script>

<template>
  <Card class="min-h-full">
    <template #content>
      <div class="flex flex-column sm:flex-row align-items-center gap-4">
        <Image
          :src="'./img/humidity.png'"
          alt="Wind icon"
          width="150"
        />
        <div>
          <h3 class="text-2xl">{{ props.humidity }} %</h3>
          <p class="text-lg mb-4">
            Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye.
          </p>
          <p class="text-lg">
            The same amount of water vapor results in higher relative humidity in cool air than warm air.
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>