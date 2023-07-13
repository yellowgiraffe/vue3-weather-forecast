<script setup>
import { ref, onMounted } from 'vue'
import WeatherSummary from './components/WeatherSummary.vue'
import TodaysHighlights from './components/TodaysHighlights.vue'

const weatherInfo = ref(null)
const summary = ref({
  temp: '',
  description: '',
  city: '',
  country: '',
  date: ''
})

const wind = ref({
  speed: '',
  deg: ''
})
const pressure = ref('')
const humidity = ref('')
const sun = ref('')

const getWeather = (city) => {
  if (!city) {
    city = 'Warsaw'
  }
  fetch(`${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      summary.value = {
        temp: data.main.temp.toFixed(),
        description: data.weather[0].description,
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
      pressure.value = data.main.pressure
      sun.value = {
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('us-US'),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('us-US')
      }
      humidity.value = data.main.humidity
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
