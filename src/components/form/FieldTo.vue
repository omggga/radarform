<template lang="pug">
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
</template>

<script>
export default {
	props: {
		userdata: {
			validator: value => typeof value === 'object',
			default: () => []
		}
	},

	data: () => ({
		countries: [],
		selectedCountries: []
	}),

	computed: {
		allCountries () {
			return this.selectedCountries.length === this.countries.length
		},
		iconCountry () {
			if (this.allCountries) return 'done'
			return 'mdi-checkbox-blank-outline'
		}
	},

	async created () {
		const tmpDataArray = [
			{
				place_to: [
					'Россия',
					'Ближнее зарубежье',
					'Европа',
					'Азия',
					'Северная Америка',
					'Африка',
					'За экватор и дальше',
					'Кроме меня только пингвины'
				]
			}
		]
		/*
		this.$options._componentTag = 'field-to', rename all components with correct db name
		const url = 'http://localhost:3000/get/' + this.$options._componentTag
		const selectData = await fetch(url)
		const result = await selectData.json()
		this.countries = result[0].place_to
		*/
		this.countries = tmpDataArray[0].place_to
		this.selectedCountries = this.userdata
	},

	methods: {
		toggleCountry () {
			this.$nextTick(() => {
				if (this.allCountries) {
					this.selectedCountries = []
				} else {
					this.selectedCountries = this.countries.slice()
					this.$refs.selectedCountries.blur()
				}
			})
		}
	}
}
</script>