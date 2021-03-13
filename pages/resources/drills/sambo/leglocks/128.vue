<template>
	<div>
		<main>
			<mp4page TITLE="Reverse Rolling Ankle Lock" />
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
			title: 'Reverse Rolling Ankle Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Reverse Rolling Ankle Lock  video and description' },
			],
		}
	}
}
</script>
