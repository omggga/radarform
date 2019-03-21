<template lang="pug">
	.md-layout-item.md-medium-size-100.md-small-size-100.md-xsmall-size-100
		md-field
			label(for="flyDates") Когда
			md-select(v-model="flyDates", name="flyDates", id="flyDates", multiple, md-dense)
				md-option(value="all") Когда угодно
				md-option(value="close dates") В ближайшее время
				md-optgroup(label="2019")
					md-option(value="20193") Март
					md-option(value="20194") Апрель
					md-option(value="201920195") Май
					md-option(value="20196") Июнь
					md-option(value="20197") Июль
					md-option(value="20198") Август
					md-option(value="20199") Сентябрь
					md-option(value="2019201910") Октябрь
					md-option(value="201911") Ноябрь
					md-option(value="201912") Декабрь
				md-optgroup(label="2020")
					md-option(value="20201") Январь
					md-option(value="20202") Февраль
</template>

<script>
export default {
	name: 'OptgroupSelect',
	data: () => ({
		flyDates: [ 'all' ]
	})
}
</script>