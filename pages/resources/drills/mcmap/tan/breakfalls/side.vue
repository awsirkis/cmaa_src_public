<template>
	<div>
		<main>
			<mp4page TITLE="Side Breakfall" />
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
			title: 'Side Breakfall | CMAA',
			meta : [
				{ name: 'description', content : 'Side Breakfall  video and description' },
			],
		}
	}
}
</script>
