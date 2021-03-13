<template>
	<div>
		<main>
			<mp4page TITLE="Spin-and-Stretch to Crossbody Armlock" />
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
			title: 'Spin-and-Stretch to Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Spin-and-Stretch to Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
