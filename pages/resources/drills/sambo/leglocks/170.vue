<template>
	<div>
		<main>
			<mp4page TITLE="Far Leg Knee Jam Bent Leglock" />
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
			title: 'Far Leg Knee Jam Bent Leglock | CMAA',
			meta : [
				{ name: 'description', content : 'Far Leg Knee Jam Bent Leglock  video and description' },
			],
		}
	}
}
</script>
