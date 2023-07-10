<script setup>
import WeatherSummary from './components/WeatherSummary.vue';
</script>

<template>
  <div class="container">
    <div>
      <h1>Weather</h1>
      <WeatherSummary />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: 1200px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
