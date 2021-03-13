<template>
	<div>
		<main>
			<mp4page TITLE="Kick Back against Scissors" />
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
			title: 'Kick Back against Scissors | CMAA',
			meta : [
				{ name: 'description', content : 'Kick Back against Scissors  video and description' },
			],
		}
	}
}
</script>
