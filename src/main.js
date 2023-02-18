import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/main.css'
import router from './router'
import { MotionPlugin } from "@vueuse/motion";
import {Icon} from '@iconify/vue';

// noinspection JSUnusedLocalSymbols
const app = createApp(App)
    .use(router)
    .use(MotionPlugin)
    .component('Icon', Icon)
    .mount('#app')

