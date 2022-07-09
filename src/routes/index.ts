import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
import TabworkView from '../view/Tabwork.vue'

const routes: RouteRecordRaw[] = [
    {
        path:'/',
        name: 'Createsheets',
        component: TabworkView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;