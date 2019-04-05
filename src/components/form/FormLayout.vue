<template lang="pug">
	v-form(id="radarform", ref="form", v-model="valid", action="", method="post")
		v-layout.pl-4.pr-4(row, wrap, justify-center)
			field-from
			field-to
			field-dates
			field-visa
			field-price
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
		slider: 99000
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
				console.log(data)
				Data example
				[
					{
						date_added: "2019-04-03T06:08:11.033Z"
						dates: "["2019-05","2019-08","2019-07"]"
						place_from: "["Москва","Санкт-Петербург","Поволжье (Казань, Нижний, Самара, Уфа)","Урал (Екб, Челябинск, Пермь)","Сибирь (Новосиб, Омск, Иркутск, Красноярск)","Дальний Восток (Владивосток, Хабаровск)","Юг/Кавказ (Сочи, Краснодар, Грозный)","СНГ и Калининград","Средняя Азия","Дальнее Зарубежье"]"
						place_to: "["Россия","Ближнее зарубежье","Европа","Азия","Северная Америка","Африка","За экватор и дальше","Кроме меня только пингвины"]"
						pricelimit: "59000"
						user_id: 1
						userkey: "kdfDsdf45k2"
						username: "test"
						visa: "["Без визы, пожалуйста","Есть шенген","Есть визы UK/USA"]"
					}
				]
			} else {
				console.log('New user')
			}
		})
		*/
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