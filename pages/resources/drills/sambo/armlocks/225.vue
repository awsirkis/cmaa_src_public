<template>
	<div>
		<main>
			<mp4page TITLE="Belt-and-Nelson to Crossbody Armlock" />
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
			title: 'Belt-and-Nelson to Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Belt-and-Nelson to Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
