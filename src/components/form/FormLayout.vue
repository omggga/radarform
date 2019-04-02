<template lang="pug">
	v-form(id="radarform", ref="form", v-model="valid", action="", method="post")
		v-layout.pl-4.pr-4(row, wrap, justify-center)
			v-flex(xs12, sm6)
				v-layout.select_from(justify-center)
					v-select(ref="selectedCities",
						track-by="cities",
						v-model="selectedCities",
						:items="cities",
						label="Откуда отсюда?",
						multiple,
						attach,
						color="#01CAD1",
						dense,
						:menu-props="{maxHeight: 185}",
						:rules="[ selectedCities.length > 0 || 'Ну так откуда?']")
						template(v-slot:prepend-item)
							v-list-tile(dense, @click="toggleCity")
								v-list-tile-action
									v-icon(:color="selectedCities.length > 0 ? '#01CAD1' : ''") {{ iconCity }}
								v-list-tile-content
									v-list-tile-title Везде
						template(v-slot:selection="{ item, index }", v-ripple="{ color: '#01CAD1' }")
							span(v-if="index === 0") {{ item }}
							span(v-if="index === 1") &nbsp;, {{ item }}
							span(v-if="index === 2") &nbsp;(+{{ selectedCities.length - 2 }})
			v-flex(xs12, sm6, :class="{'pl-4': $vuetify.breakpoint.smAndUp, 'pl-0': $vuetify.breakpoint.xsOnly}")
				v-layout.select_from(justify-center)
					v-select(ref="selectedCountries",
						name="countries",
						v-model="selectedCountries",
						:items="countries",
						label="А куда?",
						multiple,
						attach,
						color="#01CAD1",
						dense,
						:menu-props="{maxHeight: 185}",
						:rules="[ selectedCountries.length > 0 || 'Как это никуда?!']")
						template(v-slot:prepend-item)
							v-list-tile(ripple, @click="toggleCountry")
								v-list-tile-action
									v-icon(:color="selectedCountries.length > 0 ? '#01CAD1' : ''") {{ iconCountry }}
								v-list-tile-content
									v-list-tile-title Куда угодно
						template(v-slot:selection="{ item, index }")
							span(v-if="index === 0") {{ item }}
							span(v-if="index === 1") &nbsp;, {{ item }}
							span(v-if="index === 2") &nbsp;(+{{ selectedCountries.length - 2 }})
			v-flex(xs12)
				v-layout(row, wrap, justify-center)
					v-flex.dates-comobobox(justify-center, xs12)
						v-combobox(slot="activator",
							v-model="months",
							name="date",
							multiple,
							disabled,
							hide-no-data,
							readonly,
							hide-selected,
							:rules="[ months.length > 0 || 'А когда?']")
						v-date-picker(ref="months",
							label="А когда?",
							v-model="months",
							name="months",
							type="month",
							multiple,
							color="#01CAD1",
							locale="ru",
							no-title,
							min="2019-04",
							max="2020-12",
							full-width)
			v-flex.pt-2(xs12)
				v-layout.select_from(justify-center)
					v-select(ref="selectedVisas",
						v-model="selectedVisas",
						name="visa"
						:items="visa",
						label="А что с документами?",
						multiple,
						attach,
						color="#01CAD1",
						dense,
						:menu-props="{maxHeight: 185}")
						template(v-slot:prepend-item)
							v-list-tile(ripple, @click="toggleVisa")
								v-list-tile-action
									v-icon(:color="selectedVisas.length > 0 ? '#01CAD1' : ''") {{ iconVisa }}
								v-list-tile-content
									v-list-tile-title Мне все равно
						template(v-slot:selection="{ item, index }")
							span(v-if="index === 0") {{ item }}
							span(v-if="index === 1") &nbsp;, {{ item }}
							span(v-if="index === 2") &nbsp;(+{{ selectedVisas.length - 2 }})
			v-flex.pt-2(xs12)
				v-layout(row, wrap)
					v-flex.xs9
						v-slider(ref="slider",
							v-model="slider",
							name="price",
							color="#01CAD1",
							always-dirty,
							height="5",
							label="₽₽₽",
							min="0",
							max="99000",
							step="1000",
							type="number",
							:rules="[ slider > 0 || 'Ну хотя бы примерную цену']",
							thumb-label,
							thumb-size="38")
					v-flex.xs3.pl-3.txt-for-price
						v-text-field.slider-element-text(ref="sliderNum", v-model="slider", type="text", readonly)
			v-flex.pt-2(xs12)
				div.pb-3
					v-btn(color="success", @click="validate") Сохранить
					v-btn(color="info", @click="reset") Очистить форму
</template>

<script>
import FormButtons from './FormButtons.vue'
import FieldPrice from './FieldPrice.vue'
export default {
	components: {
		FormButtons,
		FieldPrice
	},

	data: () => ({
		cities: [
			'Москва',
			'Санкт-Петербург',
			'Поволжье (Казань, Нижний, Самара, Уфа)',
			'Урал (Екб, Челябинск, Пермь)',
			'Сибирь (Новосиб, Омск, Иркутск, Красноярск)',
			'Дальний Восток (Владивосток, Хабаровск)',
			'Юг/Кавказ (Сочи, Краснодар, Грозный)',
			'СНГ и Калининград',
			'Средняя Азия',
			'Дальнее Зарубежье'
		],
		countries: [
			'Россия',
			'Ближнее зарубежье',
			'Европа',
			'Азия',
			'Северная Америка',
			'Африка',
			'За экватор и дальше',
			'Кроме меня только пингвины'
		],
		visa: [
			'Без визы, пожалуйста',
			'Есть шенген',
			'Есть визы UK/USA'
		],
		valid: false,
		selectedCities: [],
		selectedCountries: [],
		months: [],
		selectedVisas: [],
		slider: 99000
	}),

	computed: {
		allCities () {
			return this.selectedCities.length === this.cities.length
		},
		iconCity () {
			if (this.allCities) return 'done'
			return 'mdi-checkbox-blank-outline'
		},
		allCountries () {
			return this.selectedCountries.length === this.countries.length
		},
		iconCountry () {
			if (this.allCountries) return 'done'
			return 'mdi-checkbox-blank-outline'
		},
		allVisas () {
			return this.selectedVisas.length === this.visa.length
		},
		iconVisa () {
			if (this.allVisas) return 'done'
			return 'mdi-checkbox-blank-outline'
		}
	},

	methods: {
		toggleCity () {
			this.$nextTick(() => {
				if (this.allCities) {
					this.selectedCities = []
				} else {
					this.selectedCities = this.cities.slice()
					this.$refs.selectedCities.blur()
				}
			})
		},
		toggleCountry () {
			this.$nextTick(() => {
				if (this.allCountries) {
					this.selectedCountries = []
				} else {
					this.selectedCountries = this.countries.slice()
					this.$refs.selectedCountries.blur()
				}
			})
		},
		toggleVisa () {
			this.$nextTick(() => {
				if (this.allVisas) {
					this.selectedVisas = []
				} else {
					this.selectedVisas = this.visa.slice()
					this.$refs.selectedVisas.blur()
				}
			})
		},
		validate () {
			if (this.$refs.form.validate()) {
				const opts = {
					from: this.$refs.selectedCities.value,
					to: this.$refs.selectedCountries.value,
					dates: this.$refs.months.value,
					visa: this.$refs.selectedVisas.value,
					price: this.$refs.slider.value
				}

				const url = 'https://getform.io/f/fda93c20-c692-429d-b0c7-2ed4f0626867'

				fetch(url, {
					method: 'POST',
					mode: 'cors',
					body: JSON.stringify(opts)
				})
					.then(response => response.json())
					.then((data) => {
						this.$router.push({ name: 'complete', params: { res: data } })
					})
					.catch((error) => {
						this.$router.push({ name: 'error', params: { error: error } })
					})
			}
		},
		reset () {
			this.$refs.form.reset()
			this.slider = ''
			this.months = []
		}
	}
}
</script>