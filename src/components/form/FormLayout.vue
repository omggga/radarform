<template lang="pug">
	v-layout.pl-4.pr-4(row, wrap, justify-center)
		v-flex(xs12, sm6)
			v-layout.select_from(justify-center)
				v-select(v-model="selectedCities", :items="cities", label="Откуда отсюда?", multiple, attach, color="#01CAD1", dense, max-height="205")
					template(v-slot:prepend-item)
						v-list-tile(dense, @click="toggleCity")
							v-list-tile-action
								v-icon(:color="selectedCities.length > 0 ? '#01CAD1' : ''") {{ iconCity }}
							v-list-tile-content
								v-list-tile-title Везде
					template(v-slot:selection="{ item, index }")
						span(v-if="index === 0") {{ item }}
						span(v-if="index === 1") &nbsp;, {{ item }}
						span(v-if="index === 2") &nbsp;(+{{ selectedCities.length - 2 }})
		v-flex(xs12, sm6, :class="{'pl-4': $vuetify.breakpoint.smAndUp, 'pl-0': $vuetify.breakpoint.xsOnly}")
			v-layout.select_from(justify-center)
				v-select(v-model="selectedCountries", :items="countries", label="А куда?", multiple, attach, color="#01CAD1", dense, , max-height="205")
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
				v-flex(justify-center, xs12)
					v-date-picker(v-model="months", type="month", multiple, color="#01CAD1", locale="ru", no-title, min="2019-04", max="2020-12", full-width)
		v-flex.pt-2(xs12)
			v-layout.select_from(justify-center)
				v-select(v-model="selectedVisas", :items="visa", label="А что с документами?", multiple, attach, color="#01CAD1", dense, , max-height="205")
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
					v-slider(v-model="slider", color="#01CAD1", always-dirty, height="5", label="₽₽₽", min="0", max="50000", step="1000", type="number")
				v-flex.xs3.pl-3.txt-for-price
					v-text-field(v-model="slider", type="number")
		v-flex.pt-2(xs12)
			div.pb-3
				v-btn(color="success") Сохранить
				v-btn(color="info") Очистить форму
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
		selectedCities: [],
		countries: [
			'Родная Россия',
			'Ближнее зарубежье',
			'Прекрасная Европа',
			'Незабываемая Азия',
			'Северная Америка',
			'Потрясающая Африка',
			'За экватор и дальше',
			'Кроме меня только пингвины'
		],
		selectedCountries: [],
		months: [],
		panel: [],
		visa: [
			'Без визы, пожалуйста',
			'Есть шенген',
			'Есть визы UK/USA'
		],
		selectedVisas: [],
		slider: 45
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
					this.$children[0].blur()
				}
			})
		},
		toggleCountry () {
			this.$nextTick(() => {
				if (this.allCountries) {
					this.selectedCountries = []
				} else {
					this.selectedCountries = this.countries.slice()
					this.$children[1].blur()
				}
			})
		},
		toggleVisa () {
			this.$nextTick(() => {
				if (this.allVisas) {
					this.selectedVisas = []
				} else {
					this.selectedVisas = this.visa.slice()
					this.$children[3].blur()
				}
			})
		}
	}
}
</script>