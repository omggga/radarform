<template lang="pug">
	.md-layout-item.md-medium-size-100.md-small-size-100.md-xsmall-size-100
		md-field
			label(for="visa") Виза
			md-select(v-model="visa", name="visa", id="visa", multiple)
				md-option(value="all") Все равно
				md-option(value="need") Без визы
				md-option(value="sheng") Есть шенген
				md-option(value="usa") Есть виза США
</template>

<script>
export default {
	name: 'OptgroupSelect',
	data: () => ({
		visa: [ 'all' ]
	})
}
</script>