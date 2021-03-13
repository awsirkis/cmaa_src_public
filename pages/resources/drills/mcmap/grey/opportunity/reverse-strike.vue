<template>
	<div>
		<main>
			<mp4page TITLE="Reverse Strike" />
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
			title: 'Reverse Strike | CMAA',
			meta : [
				{ name: 'description', content : 'Reverse Strike  video and description' },
			],
		}
	}
}
</script>
