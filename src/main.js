import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./route"
import store from "./store"

loadFonts()

const app=createApp(App)
app.use(router)
app.use(store)

  app.use(vuetify)
  app .mount('#app')

  
