import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
const SLIDER_WIDTH_FACTOR = 24.5; // Коэффициент для слайдера
const SLIDER_MAX_WIDTH = '25em'; // Максимальная ширина слайдера

document.documentElement.style.setProperty('--slider-width-factor', SLIDER_WIDTH_FACTOR);
document.documentElement.style.setProperty('--slider-max-width', SLIDER_MAX_WIDTH);
createApp(App).mount('#app')

