import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

import '../assets/app.styl'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify, {
	theme: {
		primary: '#01CAD1',
		secondary: '#2196f3',
		accent: '#4caf50',
		error: '#f44336'
	}
})

const router = new VueRouter({
	routes: [
		{ path: '/subscribe/:id', component: App }
	]
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})