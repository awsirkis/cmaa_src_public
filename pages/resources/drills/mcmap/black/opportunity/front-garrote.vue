<template>
	<div>
		<main>
			<mp4page TITLE="Garrote from the Front" />
		</main>
	</div>
</template>

<script>
import mp4page from '~/components/mp4page'
export default {
	components: {
		mp4page
	},
	mounted(){
		if (!this.$store.getters.isAuth) {
			this.$router.push('/')
		}
	},
	head() {
		return {
			title: 'Garrote from the Front | CMAA',
			meta : [
				{ name: 'description', content : 'Garrote from the Front  video and description' },
			],
		}
	}
}
</script>
