<template>
	<div>
		<main>
			<mp4page TITLE="Reverse Bundle Ankle Lock" />
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
			title: 'Reverse Bundle Ankle Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Reverse Bundle Ankle Lock  video and description' },
			],
		}
	}
}
</script>
