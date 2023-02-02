import { createApp } from 'vue'
import "./assets/scss/main.scss"
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$wpData = wpData;

app.use(router);
app.mount('#app')
