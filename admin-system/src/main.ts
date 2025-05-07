import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)
const pinia = createPinia()

// 注册所有图标
for (const i in Icons) {
  app.component(i, Icons[i as keyof typeof Icons])
}

app.use(Antd)
app.use(router)
app.use(pinia)

app.mount('#app')
