import Vue from 'vue'
import App from './components/mac.vue'
import style from './main.scss'
import VueRouter from 'vue-router'
import Mac from './components/mac.vue'
import Windows from './components/win.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/', component: Mac },
        { path: '/windows', component: Windows }
    ]
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})