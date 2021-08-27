import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/home.vue'
const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
  ]
})