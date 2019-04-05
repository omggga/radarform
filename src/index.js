import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'

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

const router = new VueRouter({ routes })

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

/*
const tmpDataArray = [
	{
		user_id: 1,
		userkey: 'kdfDsdf45k2',
		username: 'loshadka',
		date_added: '2019-04-03T06:08:11.033Z',
		dates: ['2019-05', '2019-08', '2019-07'],
		pricelimit: '59000',
		visa: ['Есть шенген'],
		place_from: ['Санкт-Петербург', 'Сибирь (Новосиб, Омск, Иркутск, Красноярск)', 'Юг/Кавказ (Сочи, Краснодар, Грозный)', 'СНГ и Калининград'],
		place_to: ['Россия', 'Европа', 'Азия', 'Кроме меня только пингвины']
	}
]
*/