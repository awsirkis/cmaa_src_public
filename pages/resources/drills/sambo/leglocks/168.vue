<template>
	<div>
		<main>
			<mp4page TITLE="Breakdown to Bent Knee Lock" />
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
			title: 'Breakdown to Bent Knee Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Breakdown to Bent Knee Lock  video and description' },
			],
		}
	}
}
</script>
