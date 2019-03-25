<template lang="pug">
	div.pb-3
		v-slider(v-model="slider", color="#01CAD1", always-dirty, height="5", label="Цена", min="0", max="50000", step="1000", thumb-size="42")
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