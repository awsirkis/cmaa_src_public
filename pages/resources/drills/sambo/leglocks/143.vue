<template>
	<div>
		<main>
			<mp4page TITLE="Bridge-and-Roll Escape" />
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
			title: 'Bridge-and-Roll Escape | CMAA',
			meta : [
				{ name: 'description', content : 'Bridge-and-Roll Escape  video and description' },
			],
		}
	}
}
</script>
