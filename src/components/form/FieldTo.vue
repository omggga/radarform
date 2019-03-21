<template lang="pug">
	.md-layout-item.md-medium-size-50.md-small-size-100.md-xsmall-size-100
		md-field
			label(for="toCountry") Откуда
			md-select(v-model="toCountry", name="toCountry", id="toCountry", multiple, md-dense)
				md-option(value="all") Весь мир
				md-option(value="MOW") Москва
				md-option(value="SPB") Санкт-Петербург
				md-option(value="5454") Азия
</template>

<script>
export default {
	name: 'MultipleSelect',
	data: () => ({
		toCountry: [ 'all' ]
	})
}
</script>