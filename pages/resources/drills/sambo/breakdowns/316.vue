<template>
	<div>
		<main>
			<mp4page TITLE="Knee Tap Breakdown" />
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
			title: 'Knee Tap Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Knee Tap Breakdown  video and description' },
			],
		}
	}
}
</script>
