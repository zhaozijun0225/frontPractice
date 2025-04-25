import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 括号是导入函数，导入属性不要括号
import router from './router/index.js'

createApp(App).use(router).mount('#app')
