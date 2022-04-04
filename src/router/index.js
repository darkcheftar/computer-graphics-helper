import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import DDA from '@/views/drawing/DDA.vue'

const routes = [
    {path:'/', name:'Home', component:Home},
    {path:'/about', name:'About', component:About},
    {path:'/dda', name:'DDA', component:DDA}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;