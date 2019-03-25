<template lang="pug">
	v-layout.select_from(justify-center)
		v-select(v-model="selectedCities", :items="cities", label="Любой город", multiple, attach, color="#01CAD1", dense)
			template(v-slot:prepend-item)
				v-list-tile(dense, @click="toggle")
					v-list-tile-action
						v-icon(:color="selectedCities.length > 0 ? '#01CAD1' : ''") {{ icon }}
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

	watch: {
		change (val) {
			console.log(val)
			setTimeout(() => {
				this.$refs.select.menuIsActive = false
			}, 50)
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