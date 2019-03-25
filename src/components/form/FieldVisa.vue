<template lang="pug">
	v-layout.select_from(justify-center)
		v-select(v-model="selectedVisas", :items="visa", label="Виза", multiple, attach, color="#01CAD1", dense)
			template(v-slot:prepend-item)
				v-list-tile(ripple, @click="toggle")
					v-list-tile-action
						v-icon(:color="selectedVisas.length > 0 ? '#01CAD1' : ''") {{ icon }}
					v-list-tile-content
						v-list-tile-title Мне все равно
</template>

<script>
export default {
	data: () => ({
		visa: [
			'Без визы, пожалуйста',
			'Есть шенген',
			'Есть визы UK/USA'
		],
		selectedVisas: []
	}),

	computed: {
		allVisas () {
			return this.selectedVisas.length === this.visa.length
		},
		icon () {
			if (this.allVisas) return 'done'
			return 'mdi-checkbox-blank-outline'
		}
	},

	methods: {
		toggle () {
			this.$nextTick(() => {
				if (this.allVisas) {
					this.selectedVisas = []
				} else {
					this.selectedVisas = this.visa.slice()
				}
			})
		}
	}
}
</script>