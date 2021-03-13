<template>
	<div>
		<main>
			<mp4page TITLE="Block for Vertical Strike" />
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
			title: 'Block for Vertical Strike | CMAA',
			meta : [
				{ name: 'description', content : 'Block for Vertical Strike  video and description' },
			],
		}
	}
}
</script>
