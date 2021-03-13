<template>
	<div>
		<main>
			<mp4page TITLE="Standing Spinngin Crossbody Armlock" />
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
			title: 'Standing Spinngin Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Standing Spinngin Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
