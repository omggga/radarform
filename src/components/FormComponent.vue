<template lang="pug">
	.form_block
		.form_block__wrapper
			.form_block__header
				h1 Найдите свое следующее путешествие

			.md-content
				.md-layout.md-gutter
					.md-layout-item
						md-field
							label(for="fromCountry") Откуда
							md-select(v-model="selectedMovies", name="fromCountry", id="fromCountry", multiple)
								md-option(value="MOW") Москва
								md-option(value="SPB") Санкт-Петербург
								md-option(value="5454") Чукота
</template>

<script>
export default {
	name: 'MultipleSelect',
	data: () => ({
		selectedMovies: []
	})
}
</script>