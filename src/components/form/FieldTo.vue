<template lang="pug">
	v-layout.select_from(justify-center)
		v-select(v-model="selectedCountries", :items="countries", label="Куда", multiple, attach, color="blue")
			template(v-slot:prepend-item)
				v-list-tile(ripple, @click="toggle")
					v-list-tile-action
						v-icon(:color="selectedCountries.length > 0 ? 'blue darken-2' : ''") {{ icon }}
					v-list-tile-content
						v-list-tile-title Весь мир
</template>

<script>
export default {
	data: () => ({
		countries: [
			'Европа',
			'Азия',
			'Транзитом через Урумчи'
		],
		selectedCountries: []
	}),

	computed: {
		allCountries () {
			return this.selectedCountries.length === this.countries.length
		},
		icon () {
			if (this.allCountries) return 'done'
			return 'mdi-checkbox-blank-outline'
		}
	},

	methods: {
		toggle () {
			this.$nextTick(() => {
				if (this.allCountries) {
					this.selectedCountries = []
				} else {
					this.selectedCountries = this.countries.slice()
				}
			})
		}
	}
}
</script>