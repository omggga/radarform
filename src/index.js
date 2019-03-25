import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

import '../assets/app.styl'

Vue.use(Vuetify, {
	theme: {
		primary: '#01CAD1',
		secondary: '#2196f3',
		accent: '#4caf50',
		error: '#f44336'
	}
})

new Vue({
	el: '#app',
	render: h => h(App)
})