<script setup>
import InputText from 'primevue/inputtext'
import Image from 'primevue/image'
import Card from 'primevue/card'
import Divider from 'primevue/divider';
import { ref } from 'vue';

const searchValue = ref('')
const isLoading = ref(false)
const currentWeatherStatus = ref('thunderstorm')
const currentTemp = ref(14)
</script>

<template>
  <section class="col-4">
    <Card style="width: 25em">
      <template #title>
        <div class="mb-4">
          <span class="p-input-icon-right">
            <i class="pi" :class="isLoading ? 'pi-spin pi-spinner' : 'pi-search'" />
            <InputText
              type="text"
              v-model="searchValue"
              placeholder="Search"
              style="width: 100%;"
            />
          </span>
        </div>
        <div class="mb-4">
          <Image
            :src="'./src/assets/img/weather-main/'+currentWeatherStatus+'.png'"
            :alt="currentWeatherStatus"
            width="100"
          />
        </div>
        {{ currentTemp }} °C
      </template>
      <template #content>
        <p> Thunderstorm </p>
        <Divider />
        <div class="mb-2">
          <i class="pi pi-map-marker mr-1"></i> Paris, FR
        </div>
        <div>
          <i class="pi pi-calendar mr-1"></i> Thu, March 16, 2023
        </div>
      </template>
    </Card>
  </section>
</template>