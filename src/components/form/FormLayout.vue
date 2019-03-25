<template lang="pug">
	v-layout.pl-4.pr-4(row, wrap, justify-center)
		v-flex(xs12, sm6)
			field-from
		v-flex(xs12, sm6, :class="{'pl-4': $vuetify.breakpoint.smAndUp, 'pl-0': $vuetify.breakpoint.xsOnly}")
			field-to

</template>

<script>
import FieldFrom from './FieldFrom.vue'
import FieldTo from './FieldTo.vue'
import FieldDates from './FieldDates.vue'
import FieldVisa from './FieldVisa.vue'
import FormButtons from './FormButtons.vue'
export default {
	components: {
		FieldFrom,
		FieldTo,
		FieldDates,
		FieldVisa,
		FormButtons
	}
}
</script>