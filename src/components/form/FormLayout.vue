<template lang="pug">
	v-form(id="radarform", ref="form", v-model="valid", action="", method="post")
		v-layout.pl-4.pr-4(row, wrap, justify-center)
			field-from(:userdata="userFrom")
			field-to(:userdata="userTo")
			field-dates(:userdata="userMonths")
			field-visa(:userdata="userVisa")
			field-price(:userdata="userprice")
			v-flex.pt-2(xs12)
				div.pb-3
					v-btn(color="success", @click="validate") Сохранить
					v-btn(color="info", @click="reset") Очистить форму
</template>

<script>
import FieldFrom from './FieldFrom.vue'
import FieldTo from './FieldTo.vue'
import FieldDates from './FieldDates.vue'
import FieldVisa from './FieldVisa.vue'
import FieldPrice from './FieldPrice.vue'
export default {
	components: {
		FieldFrom,
		FieldTo,
		FieldDates,
		FieldVisa,
		FieldPrice
	},

	data: () => ({
		valid: false,
		userFrom: [],
		userTo: [],
		userMonths: [],
		userVisa: [],
		userprice: 99000
	}),

	async created () {
		/*
		const url = 'http://localhost:3000/user/' + this.$route.params.id
		fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			return response.json()
		}).then((data) => {
			if (data) {
				this.selectedMonths = data
			} else {
				console.log('New user')
			}
		})
		*/
		this.userFrom = ['Москва', 'Санкт-Петербург']
		this.userTo = ['Европа', 'Азия']
		this.userMonths = ['2019-07', '2019-05', '2019-01']
		this.userVisa = ['Есть шенген']
		this.userprice = 15000
	},

	methods: {
		validate () {
			if (this.$refs.form.validate()) {
				/*
				const data = {
					key: 1,
					from: this.$refs.selectedCities.value,
					to: this.$refs.selectedCountries.value,
					dates: this.$refs.months.value,
					visa: this.$refs.selectedVisas.value,
					price: this.$refs.slider.value
				}

				fetch('http://localhost:3000/save', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				}).then((data) => {
					console.log('data', data)
				})
				*/
			}
		},
		reset () {
			this.$refs.form.reset()
			this.slider = 99000
		}
	}
}
</script>