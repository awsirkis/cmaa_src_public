<template>
	<div>
		<main>
			<mp4page TITLE="Ankle Pick to Ankle Lock" />
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
			title: 'Ankle Pick to Ankle Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Ankle Pick to Ankle Lock  video and description' },
			],
		}
	}
}
</script>
