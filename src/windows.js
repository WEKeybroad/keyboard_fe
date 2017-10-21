import Vue from 'vue'
import WinApp from './components/win.vue'
import style from './main.scss'

new Vue({
    el: "#winApp",
    render: h => h(WinApp)
})
