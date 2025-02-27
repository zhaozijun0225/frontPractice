import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App) //生成根组件(vue实例)
    .mount('#app') //挂载组件到id=app的容器里（#是id）,主页面是index.html

// 程序入口：main.js
// 根组件入口：App.vue
