<template lang="pug">
	.form_block.md-elevation-7
		.form_block__wrapper
			.form_block__header
				.md-layout
					img(src="/static/images/logo.jpg", alt="Travel Radar")
				span.md-display-1 Найдите свое следующее путешествие
			form-layout
</template>

<script>
import FormLayout from './form/FormLayout.vue'
export default {
	components: {
		FormLayout
	}
}
</script>