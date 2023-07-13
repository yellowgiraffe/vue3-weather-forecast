<script setup>
import InputText from 'primevue/inputtext'
import Image from 'primevue/image'
import Card from 'primevue/card'
import Divider from 'primevue/divider';
import { ref, watch } from 'vue';

const props = defineProps({
  data: Object
})

const searchValue = ref('')
const isLoading = ref(false)

watch(props.data, (newValue) => {
  searchValue.value = newValue.city
  console.log('WATCH')
})
</script>

<template>
  <section class="col-4">
    <Card style="width: 25em">
      <template #title>
        <div class="mb-4">
          <span class="p-input-icon-right">
            <i class="cursor-pointer pi" :class="isLoading ? 'pi-spin pi-spinner' : 'pi-search'" @click="$emit('updated', searchValue)" />
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
            :src="'./src/assets/img/weather-main/'+props.data.description+'.png'"
            :alt="props.data.description"
            width="100"
          />
        </div>
        {{ props.data.temp }} °C
      </template>
      <template #content>
        <div> {{ props.data.description }}</div>
        <Divider />
        <div class="mb-2">
          <i class="pi pi-map-marker mr-1"></i> {{ props.data.city }}, {{ props.data.country }}
        </div>
        <div>
          <i class="pi pi-calendar mr-1"></i> {{ props.data.date }}
        </div>
      </template>
    </Card>
  </section>
</template>