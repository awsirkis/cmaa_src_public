<template>
	<div>
		<main>
			<mp4page TITLE="Garrote from the Rear" />
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
			title: 'Garrote from the Rear | CMAA',
			meta : [
				{ name: 'description', content : 'Garrote from the Rear  video and description' },
			],
		}
	}
}
</script>
