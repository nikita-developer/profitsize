import { createApp } from 'vue'
import App from '@/App.vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import components from '@/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(PerfectScrollbar).mount('#app')
