import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import {
  Button,
  Layout,
  Menu,
  Form,
  Input,
  Card,
  Row,
  Col,
  Table,
  Tag,
  List,
  Avatar,
  Dropdown,
  message
} from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)
const pinia = createPinia()

// 注册所有图标
for (const i in Icons) {
  app.component(i, Icons[i as keyof typeof Icons])
}

// 注册 Ant Design Vue 组件
app.use(Button)
app.use(Layout)
app.use(Menu)
app.use(Form)
app.use(Input)
app.use(Card)
app.use(Row)
app.use(Col)
app.use(Table)
app.use(Tag)
app.use(List)
app.use(Avatar)
app.use(Dropdown)

app.use(router)
app.use(pinia)

app.mount('#app')