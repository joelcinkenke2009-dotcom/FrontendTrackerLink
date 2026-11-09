import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/design-system.css'
import './assets/production-overrides.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
