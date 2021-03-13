<template>
	<div>
		<main>
			<mp4page TITLE="Sit to Crossbody Armlock" />
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
			title: 'Sit to Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Sit to Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
