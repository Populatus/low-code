import { createPinia } from 'pinia'
import app from './app'
app.use(createPinia())
app.mount('#app')
