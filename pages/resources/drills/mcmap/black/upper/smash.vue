<template>
	<div>
		<main>
			<mp4page TITLE="Face Smash" />
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
			title: 'Face Smash | CMAA',
			meta : [
				{ name: 'description', content : 'Face Smash  video and description' },
			],
		}
	}
}
</script>
