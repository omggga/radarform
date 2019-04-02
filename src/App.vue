<template lang="pug">
	v-app
		v-container(fluid, text-xs-center, grid-list-md )
			v-card(min-width="375", max-width="600")
				form-component
</template>

<script>
import FormComponent from './components/FormComponent.vue'
export default {
	name: 'App',
	components: {
		FormComponent
	},
	mounted: function () {
		console.log(this.$route.params.id)
	}
}
</script>
