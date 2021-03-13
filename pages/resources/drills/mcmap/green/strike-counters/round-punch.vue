<template>
	<div>
		<main>
			<mp4page TITLE="Counter to Round Punch" />
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
			title: 'Counter to Round Punch | CMAA',
			meta : [
				{ name: 'description', content : 'Counter to Round Punch  video and description' },
			],
		}
	}
}
</script>
