<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from "primevue/usetoast";

import Toast from 'primevue/toast';

import WeatherSummary from './components/WeatherSummary.vue'
import WindPanel from './components/WindPanel.vue'
import PressurePanel from './components/PressurePanel.vue'
import SunPanel from './components/SunPanel.vue'
import WindGust from './components/WindGust.vue'
import FeelsLike from './components/FeelsLike.vue'
import CloudinessPanel from './components/CloudinessPanel.vue'
import CoordsPanel from './components/CoordsPanel.vue'
import HumidityPanel from './components/HumidityPanel.vue'

const toast = useToast();

const isLoading = ref(false)
const summary = ref(null)
const wind = ref(null)
const pressure = ref(null)
const sun = ref(null)
const windGusts = ref(null)
const feelsLike = ref(null)
const cloudiness = ref(null)
const coords = ref(null)
const humidity = ref(null)

const showError = (err) => {
  toast.add({
    severity: 'error',
    summary: err,
    detail: 'Please try again',
    life: 3000
  })
}

const getWeather = (city) => {
  isLoading.value = true
  if (!city) city = 'Warsaw'
  fetch(`${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.cod === '404') throw new Error('City not found')
      if (data.cod !== 200) throw new Error('Something went wrong')
      const desc = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
      summary.value = {
        temp: data.main.temp.toFixed(),
        description: desc,
        city: data.name,
        country: data.sys.country,
        date: new Date(data.dt * 1000).toLocaleDateString('us-US', {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }
      wind.value = {
        speed: data.wind.speed,
        deg: data.wind.deg
      }
      pressure.value = Math.round(data.main.pressure * 0.750062)
      sun.value = {
        timezone: data.timezone,
        sunrise: new Date((data.sys.sunrise + data.timezone) * 1000).toLocaleTimeString('us-US', { timeZone: 'Atlantic/Reykjavik'}),
        sunset: new Date((data.sys.sunset + data.timezone) * 1000).toLocaleTimeString('us-US', { timeZone: 'Atlantic/Reykjavik'})
      }
      windGusts.value = data.wind.gust
      feelsLike.value = data.main.feels_like.toFixed()
      cloudiness.value = data.clouds.all
      coords.value = {
        lat: data.coord.lat,
        lon: data.coord.lon
      }
      humidity.value = data.main.humidity
    })
    .catch((err) => {
      showError(err)
    })
    .finally(() => {
      isLoading.value = false
    })
}

onMounted(getWeather)
</script>

<template>
  <Toast position="top-center" />
  <div class="container">
    <div class="grid">
      <WeatherSummary
        :is-loading="isLoading"
        :summary="summary"
        @updated="getWeather"
      />
      <section class="highlights col-8">
        <h3 class="font-2xl font-normal mb-4">Today's highlights</h3>
        <div class="flex gap-3 mb-4">
          <WindPanel :wind="wind" />
          <PressurePanel :pressure="pressure" />
          <SunPanel :sun="sun" />
        </div>
        <div class="flex gap-3">
          <WindGust :wind-gust="windGusts"/>
          <FeelsLike :feels-like="feelsLike" />
          <CloudinessPanel :cloudiness="cloudiness" />
        </div>
  </section>
  <section class="flex gap-3">
    <CoordsPanel :coords="coords" />
    <HumidityPanel :humidity="humidity" />
  </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.highlights {
  background-color: #071426;
  border-radius: 6px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1.25rem;
}
</style>
