<template>
	<div>
		<main>
			<mp4page TITLE="Leg Drag Head Roll Crossbody Armlock" />
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
			title: 'Leg Drag Head Roll Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Drag Head Roll Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
