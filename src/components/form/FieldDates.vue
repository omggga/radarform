<template lang="pug">
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
					:min="minDate",
					:max="maxDate",
					full-width)
</template>

<script>
export default {
	data: () => ({
		months: []
	}),

	computed: {
		minDate (val) {
			return this.formatDate(new Date())
		},
		maxDate () {
			return this.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
		}
	},

	async created () {
		const tmpDataArray = [
			{
				dates: ['2019-01', '2019-08', '2019-07']
			}
		]
		/*
		this.$options._componentTag = 'field-dates', rename all components with correct db name
		const url = 'http://localhost:3000/get/' + this.$options._componentTag
		const selectData = await fetch(url)
		const result = await selectData.json()
		this.months = result[0].dates
		*/
		const arrOfDates = tmpDataArray[0].dates
		let i = arrOfDates.length
		while (i--) {
			if (new Date(arrOfDates[i]) < new Date()) {
				arrOfDates.splice(i, 1)
			}
		}
		this.months = arrOfDates
	},

	methods: {
		formatDate (date) {
			const year = date.getFullYear()
			let month = date.getMonth() + 1
			if (month.length < 2) month = `0${month}`
			return [year, month].join('-')
		}
	}
}
</script>