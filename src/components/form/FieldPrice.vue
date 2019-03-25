<template lang="pug">
	div
		v-slider(v-model="slider", color="#01CAD1")
</template>

<script>
export default {
	data () {
		return {
			slider: 45
		}
	}
}
</script>