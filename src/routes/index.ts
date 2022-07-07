import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
import CreateSheet from '../components/Createsheet.vue'

const routes: RouteRecordRaw[] = [
    {
        path:'/',
        name: 'Createsheets',
        component: CreateSheet
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default roteador;