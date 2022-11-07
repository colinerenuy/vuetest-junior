import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const yelpApiKey = 'Hja9zGrVhyzBieGQpmrv0GRGbeTMSgDQ-27uHpcuN0EwOzESTKK86VVxqoDYZgP5TVAZhixNSdHhqE6EX5J7odLhjhyhVZ5p0pC1xSbWsx4A4yrYCln8nPssukBcY3Yx'
const axiosInstance = axios.create({

  mode: 'cors',
  baseURL: `/api`,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${yelpApiKey}`
  }
})
app.use(VueAxios, { axios: axiosInstance })
app.provide('axios', app.config.globalProperties.axios)  
// providing 'axios'
// In your Views, inject axios like this:
/*
import { inject } from 'vue'
const axios = inject('axios')
*/

app.mount('#app')

