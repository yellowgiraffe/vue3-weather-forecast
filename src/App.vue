<script setup>
import { ref, onMounted } from 'vue'
import WeatherSummary from './components/WeatherSummary.vue'
import TodaysHighlights from './components/TodaysHighlights.vue'

const search = ref('Warsaw')
const weatherInfo = ref(null)
const summary = ref({
  temp: '',
  description: '',
  city: 'Warsaw',
  country: '',
  date: ''
})

const wind = ref({
  speed: '',
  deg: ''
})
const pressure = ref('')
const humidity = ref('')

const getWeather = () => {
  fetch(`${import.meta.env.VITE_BASE_URL}?q=${search.value}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      weatherInfo.value = data
      summary.value.temp = data.main.temp.toFixed()
      summary.value.description = data.weather[0].description
      summary.value.city = data.name
      summary.value.country = data.sys.country
      summary.value.date = new Date(data.dt * 1000).toLocaleDateString('us-US', {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    })
}

onMounted(getWeather)
</script>

<template>
  {{ weatherInfo }}
  <div class="container">
    <div class="grid">
      <WeatherSummary :data="summary" @updated="getWeather" />
      <TodaysHighlights :test="weatherInfo" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  /* max-width: 1200px; */
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
