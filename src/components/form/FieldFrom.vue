<template lang="pug">
	v-layout.select_from(justify-center)
		v-select(v-model="selectedCities", :items="cities", label="Любой город", multiple, attach, color="#01CAD1", dense)
			template(v-slot:prepend-item)
				v-list-tile(dense, @click="toggle")
					v-list-tile-action
						v-icon(:color="selectedCities.length > 0 ? '#01CAD1' : ''") {{ icon }}
					v-list-tile-content
						v-list-tile-title Везде
			template(v-slot:selection="{ item, index }")
				span(v-if="index === 0") {{ item }}
				span(v-if="index === 1") &nbsp;, {{ item }}
				span(v-if="index === 2") &nbsp;(+{{ selectedCities.length - 2 }})
</template>

<script>
export default {
	data: () => ({
		cities: [
			'Москва',
			'Санкт-Петербург',
			'Тюмень',
			'Чукота'
		],
		selectedCities: []
	}),

	computed: {
		allCities () {
			return this.selectedCities.length === this.cities.length
		},
		icon () {
			if (this.allCities) return 'done'
			return 'mdi-checkbox-blank-outline'
		}
	},

	methods: {
		toggle () {
			this.$nextTick(() => {
				if (this.allCities) {
					this.selectedCities = []
				} else {
					this.selectedCities = this.cities.slice()
					this.$children[0].blur()
				}
			})
		}
	}
}
</script>