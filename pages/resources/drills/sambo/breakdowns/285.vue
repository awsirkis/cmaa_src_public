<template>
	<div>
		<main>
			<mp4page TITLE="Hold-down to Submission" />
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
			title: 'Hold-down to Submission | CMAA',
			meta : [
				{ name: 'description', content : 'Hold-down to Submission  video and description' },
			],
		}
	}
}
</script>
