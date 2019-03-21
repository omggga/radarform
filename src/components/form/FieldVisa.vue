<template lang="pug">
	.md-layout-item.md-medium-size-100.md-small-size-100.md-xsmall-size-100
		md-field
			label(for="visa") Виза
			md-select(v-model="visa", name="visa", id="visa", multiple)
				md-option(value="all") Все равно
				md-option(value="need") Виза не нужна
				md-option(value="sheng") Есть шенген
</template>

<script>
export default {
	name: 'OptgroupSelect',
	data: () => ({
		visa: [ 'all' ]
	})
}
</script>