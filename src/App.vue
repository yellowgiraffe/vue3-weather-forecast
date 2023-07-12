<script setup>
import WeatherSummary from './components/WeatherSummary.vue'
import TodaysHighlights from './components/TodaysHighlights.vue'
</script>

<template>
  <div class="container">
    <div class="grid">
      <WeatherSummary />
      <TodaysHighlights />
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
