<template>
	<div>
		<main>
			<mp4page TITLE="Counter for Forward Strike" />
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
			title: 'Counter for Forward Strike | CMAA',
			meta : [
				{ name: 'description', content : 'Counter for Forward Strike  video and description' },
			],
		}
	}
}
</script>
