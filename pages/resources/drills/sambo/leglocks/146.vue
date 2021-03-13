<template>
	<div>
		<main>
			<mp4page TITLE="Far Hip Roll to Straight Knee Lock" />
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
			title: 'Far Hip Roll to Straight Knee Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Far Hip Roll to Straight Knee Lock  video and description' },
			],
		}
	}
}
</script>
