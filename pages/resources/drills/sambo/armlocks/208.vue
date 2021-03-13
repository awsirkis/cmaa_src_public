<template>
	<div>
		<main>
			<mp4page TITLE="Vertical Front Hold to Head Roll Crossbody Armlock" />
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
			title: 'Vertical Front Hold to Head Roll Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Vertical Front Hold to Head Roll Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
