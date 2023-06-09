import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from '@/App.vue'
const app = createApp(App)

import 'virtual:svg-icons-register'
import router from './router'
import Gcomponents from '@/components'
import '@/style/index.scss'

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.use(Gcomponents)
app.mount('#app')

