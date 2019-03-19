import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '../assets/app.styl'

Vue.use(VueMaterial)

new Vue({
	el: '#app',
	render: h => h(App)
})