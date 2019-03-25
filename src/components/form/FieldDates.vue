<template lang="pug">
	v-layout(row, wrap, justify-center)
		v-flex(justify-center, xs12)
			v-date-picker(v-model="months", type="month", multiple, color="#01CAD1", locale="ru", no-title, min="2019-03", max="2020-03", full-width)
</template>

<script>
export default {
	data: () => ({
		months: [],
		panel: []
	})
}
</script>