import './assets/main.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'    
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue);
app.mount('#app')
