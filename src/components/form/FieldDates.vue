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
					min="2019-04",
					max="2020-12",
					full-width)
</template>

<script>
export default {
	data: () => ({
		months: []
	}),

	async created () {
		const tmpDataArray = [
			{
				dates: ['2019-05', '2019-08', '2019-07']
			}
		]
		/*
		this.$options._componentTag = 'field-dates', rename all components with correct db name
		const url = 'http://localhost:3000/get/' + this.$options._componentTag
		const selectData = await fetch(url)
		const result = await selectData.json()
		this.months = result[0].dates
		*/
		this.months = tmpDataArray[0].dates
	}
}
</script>