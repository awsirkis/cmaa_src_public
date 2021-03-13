<template>
	<div>
		<main>
			<mp4page TITLE="Vertical Strike" />
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
			title: 'Vertical Strike | CMAA',
			meta : [
				{ name: 'description', content : 'Vertical Strike  video and description' },
			],
		}
	}
}
</script>
