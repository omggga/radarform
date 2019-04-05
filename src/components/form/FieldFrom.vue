<template lang="pug">
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
</template>

<script>
export default {
	data: () => ({
		cities: [],
		selectedCities: []
	}),

	computed: {
		allCities () {
			return this.selectedCities.length === this.cities.length
		},
		iconCity () {
			if (this.allCities) return 'done'
			return 'mdi-checkbox-blank-outline'
		}
	},

	async created () {
		const tmpDataArray = [
			{
				place_from: [
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
				]
			}
		]
		/*
		this.$options._componentTag = 'field-from', rename all components with correct db name
		const url = 'http://localhost:3000/get/' + this.$options._componentTag
		const selectData = await fetch(url)
		const result = await selectData.json()
		this.cities = result[0].place_from
		*/
		this.cities = tmpDataArray[0].place_from
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
		}
	}
}
</script>