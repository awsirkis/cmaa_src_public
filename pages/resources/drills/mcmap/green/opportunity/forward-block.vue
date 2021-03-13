<template>
	<div>
		<main>
			<mp4page TITLE="Block for Forward Strike" />
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
			title: 'Block for Forward Strike | CMAA',
			meta : [
				{ name: 'description', content : 'Block for Forward Strike  video and description' },
			],
		}
	}
}
</script>
