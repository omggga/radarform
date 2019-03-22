<template lang="pug">
	.md-content.form_layout--block
		.md-layout.md-gutter
			field-from
			field-to
		.md-layout.md-gutter
			field-dates
		.md-layout.md-gutter
			field-visa
		.md-layout.md-gutter
			form-buttons
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