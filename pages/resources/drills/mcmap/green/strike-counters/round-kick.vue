<template>
	<div>
		<main>
			<mp4page TITLE="Counter to Round Kick" />
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
			title: 'Counter to Round Kick | CMAA',
			meta : [
				{ name: 'description', content : 'Counter to Round Kick  video and description' },
			],
		}
	}
}
</script>
