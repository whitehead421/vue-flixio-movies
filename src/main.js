import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyB1pm__blxBg0spiaoNUh2W979T-Hu8OgE',
  authDomain: 'flixio-eb143.firebaseapp.com',
  projectId: 'flixio-eb143',
  storageBucket: 'flixio-eb143.appspot.com',
  messagingSenderId: '552450178957',
  appId: '1:552450178957:web:5c3f4188ac0c0ef9e087c4',
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
