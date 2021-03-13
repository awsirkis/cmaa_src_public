<template>
	<div>
		<main>
			<mp4page TITLE="Rear Breakfall" />
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
			title: 'Rear Breakfall | CMAA',
			meta : [
				{ name: 'description', content : 'Rear Breakfall  video and description' },
			],
		}
	}
}
</script>
