<template lang="pug">
	v-layout.select_from(justify-center)
		v-select(v-model="selectedCities", :items="cities", label="Откуда", multiple, attach, color="blue")
			template(v-slot:prepend-item)
				v-list-tile(dense, @click="toggle")
					v-list-tile-action
						v-icon(:color="selectedCities.length > 0 ? 'blue darken-2' : ''") {{ icon }}
					v-list-tile-content
						v-list-tile-title Везде
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
				}
			})
		}
	}
}
</script>