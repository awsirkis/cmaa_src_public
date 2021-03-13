<template>
	<div>
		<main>
			<mp4page TITLE="Sit on Opponent Knee Jam Bent Leglock" />
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
			title: 'Sit on Opponent Knee Jam Bent Leglock | CMAA',
			meta : [
				{ name: 'description', content : 'Sit on Opponent Knee Jam Bent Leglock  video and description' },
			],
		}
	}
}
</script>
