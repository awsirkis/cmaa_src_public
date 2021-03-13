<template>
	<div>
		<main>
			<mp4page TITLE="Escort Position Takedown" />
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
			title: 'Escort Position Takedown | CMAA',
			meta : [
				{ name: 'description', content : 'Escort Position Takedown  video and description' },
			],
		}
	}
}
</script>
