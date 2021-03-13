<template>
	<div>
		<main>
			<mp4page TITLE="Knee Jam/Belt Line Spinning Crossbody Armlock" />
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
			title: 'Knee Jam/Belt Line Spinning Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Knee Jam/Belt Line Spinning Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
