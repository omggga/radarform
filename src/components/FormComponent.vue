<template lang="pug">
	v-layout.pt-3.pb-3(wrap)
		v-flex(xs12)
			img(src="static/images/logo.jpg", alt="Travel Radar", width="70", height="70", style="vertical-align: middle")
			span.headline.pl-2 Найди свое путешествие!
		v-flex(xs12)
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