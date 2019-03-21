<template lang="pug">
	.md-layout-item.md-medium-size-50.md-small-size-100.md-xsmall-size-100
		md-field
			label(for="fromCountry") Откуда
			md-select(v-model="fromCountry", name="fromCountry", id="fromCountry", multiple, md-dense)
				md-option(value="MOW") Москва
				md-option(value="SPB") Санкт-Петербург
				md-option(value="5454") Чукота
</template>

<script>
export default {
	name: 'MultipleSelect',
	data: () => ({
		fromCountry: [ 'MOW' ]
	})
}
</script>