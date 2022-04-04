import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import DDA from '@/views/drawing/DDA.vue'
import BreCircle from '@/views/drawing/BreCircle.vue'
import MidpointCircle from '@/views/drawing/MidpointCircle.vue'
import BreLine from '@/views/drawing/BreLine.vue'

const routes = [
    {path:'/', name:'Home', component:Home},
    {path:'/about', name:'About', component:About},
    {path:'/dda', name:'DDA', component:DDA},
    {path:'/brecircle', name:'BreCircle', component:BreCircle},
    {path:'/midcircle', name:'MidpointCircle', component:MidpointCircle},
    {path:'/breline', name:'BreLine', component:BreLine},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;