import { createApp } from 'vue'
import App from './App.vue'
// 导入router和store
import { router } from '/@/router/index'
import { setupStore } from '/@/store/index';

const app = createApp(App)
app.use(router)
setupStore(app)
app.mount('#app')
