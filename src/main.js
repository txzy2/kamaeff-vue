import './assets/styles.css'

import { createApp } from 'vue'
import vue3Highlightjs from 'vue3-highlightjs'
import 'highlight.js/styles/dracula.css'

import App from './App.vue'

createApp(App).use(vue3Highlightjs).mount('#app')
