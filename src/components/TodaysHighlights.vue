<script setup>
import Card from 'primevue/card'
import Image from 'primevue/image'
</script>

<template>
  <section class="highlights col-8">
    <h3 class="font-normal mb-4">Today's highlights</h3>
    <div class="flex gap-3 mb-4">
      <Card class="bg-gray-900" style="width: 20em">
        <template #subtitle>
          Wind
        </template>
        <template #content>
          <div class="mb-4 flex justify-content-center align-items-center">
            <Image
              :src="'./src/assets/img/equalizer.png'"
              alt=""
              width="150"
            />
          </div>
          <div class="flex justify-content-between mb-4">
            <div class="text-4xl">2.2<span class="text-sm">m/s</span></div>
            <div class="text-4xl">250<span class="text-sm">deg</span></div>
          </div>
        </template>
      </Card>
      <Card class="bg-gray-900 min-h-full" style="width: 20em">
        <template #subtitle>
          Pressure
        </template>
        <template #content>
          <div class="mb-4 flex justify-content-center align-items-center" style="min-height: 150px;">
            <Image
              :src="'./src/assets/img/barometer.png'"
              alt=""
              width="150"
            />
          </div>
          <div class="flex justify-content-center mb-4">
            <div class="text-4xl">641<span class="text-sm">mm</span></div>
          </div>
        </template>
      </Card>
      <Card class="bg-gray-900" style="width: 20em">
        <template #subtitle>
          Sunrise and sunset
        </template>
        <template #content>
          <div class="mb-4 flex justify-content-center align-items-center" style="min-height: 150px;">
            <Image
              :src="'./src/assets/img/sun-moving.png'"
              alt=""
              width="150"
            />
          </div>
          <div class="flex justify-content-between mb-4">
            <div class="text-l font-semibold">
              <span class="text-yellow-300">Sunrise</span>
              <div class="text-xl">06:41:12</div>
            </div>
            <div class="text-l font-semibold">
              <span class="text-yellow-300">Sunset</span>
              <div class="text-xl">21:07:22</div></div>
          </div>
        </template>
      </Card>
    </div>
    <div class="flex gap-3">
      <Card class="bg-gray-900" style="width: 20em">
        <template #subtitle>
          Wind gusts
        </template>
        <template #content>
          <div class="flex justify-content-between mb-4">
            <div class="text-4xl mr-4">5.3<span class="text-sm">m/s</span></div>
            <div>
              <i class="pi pi-map-marker text-400 mr-1"></i>
              <div class="text-400">Learn more about gusts</div>
            </div>
          </div>
        </template>
      </Card>
      <Card class="bg-gray-900" style="width: 20em">
        <template #subtitle>
          Feels like
        </template>
        <template #content>
          <div class="flex justify-content-between mb-4">
            <div class="text-4xl mr-4">17<span class="text-sm">°C</span></div>
            <div>
              <i class="pi pi-map-marker text-400 mr-1"></i>
              <div class="text-400">How hot or cold it really feels</div>
            </div>
          </div>
        </template>
      </Card>
      <Card class="bg-gray-900" style="width: 20em">
        <template #subtitle>
          Cloudiness
        </template>
        <template #content>
          <div class="flex justify-content-between mb-4">
            <div class="text-4xl mr-4">75<span class="text-sm">%</span></div>
            <div>
              <i class="pi pi-map-marker text-400 mr-1"></i>
              <div class="text-400">The sky fraction obscured by clouds</div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  background-color: #071426;
  border-radius: 6px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1.25rem;
}
</style>