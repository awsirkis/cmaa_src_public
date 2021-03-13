<template>
	<div>
		<main>
			<mp4page TITLE="Kick Back Straight Knee Bar" />
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
			title: 'Kick Back Straight Knee Bar | CMAA',
			meta : [
				{ name: 'description', content : 'Kick Back Straight Knee Bar  video and description' },
			],
		}
	}
}
</script>
