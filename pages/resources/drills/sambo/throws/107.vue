<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Ankle Pick to Straight Knee Lock" />
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
			title: 'Rolling Ankle Pick to Straight Knee Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Ankle Pick to Straight Knee Lock  video and description' },
			],
		}
	}
}
</script>
