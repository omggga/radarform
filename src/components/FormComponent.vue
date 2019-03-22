<template lang="pug">
	.form_block.md-elevation-7
		.form_block__wrapper
			.form_block__header
				.md-layout.md-gutter.md-alignment-center-center
					.md-layout-item.md-size-25
						img(src="static/images/logo.jpg", alt="Travel Radar")
					.md-layout-item.md-size-75
						span.md-headline Найди свое путешествие!
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