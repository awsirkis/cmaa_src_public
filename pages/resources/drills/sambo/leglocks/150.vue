<template>
	<div>
		<main>
			<mp4page TITLE="Leg Scissors Transition to Straight Leg Lock" />
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
			title: 'Leg Scissors Transition to Straight Leg Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Scissors Transition to Straight Leg Lock  video and description' },
			],
		}
	}
}
</script>
