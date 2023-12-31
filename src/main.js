import './assets/main.css'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'    
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import ToastService from 'primevue/toastservice';


import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app')
