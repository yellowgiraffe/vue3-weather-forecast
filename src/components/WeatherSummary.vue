<script setup>
import InputText from 'primevue/inputtext'
import Image from 'primevue/image'
import Card from 'primevue/card'
import Divider from 'primevue/divider';
import { ref, } from 'vue';

const props = defineProps({
  summary: {
    type: [Object, null],
    required: true
  },
  isLoading: Boolean
})

const searchValue = ref('Warsaw')
</script>

<template>
  <Card v-if="props.summary" class="min-h-full">
    <template #title>
      <div class="mb-4">
        <span class="p-input-icon-right">
          <i class="cursor-pointer pi" :class="props.isLoading ? 'pi-spin pi-spinner' : 'pi-search'" @click="$emit('updated', searchValue)" />
          <InputText
            type="text"
            v-model="searchValue"
            placeholder="Search"
            style="width: 100%;"
            @keyup.enter="$emit('updated', searchValue)"
          />
        </span>
      </div>
      <div class="mb-4">
        <Image
          :src="`./img/weather-main/${props.summary.description}.png`"
          :alt="props.summary.description"
          width="100"
        />
      </div>
      {{ props.summary.temp }} °C
    </template>
    <template #content>
      <div> {{ props.summary.description }}</div>
      <Divider />
      <div class="mb-2">
        <i class="pi pi-map-marker mr-1"></i> {{ props.summary.city }}, {{ props.summary.country }}
      </div>
      <div>
        <i class="pi pi-calendar mr-1"></i> {{ props.summary.date }}
      </div>
    </template>
  </Card>
</template>