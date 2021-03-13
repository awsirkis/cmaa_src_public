<template>
	<div>
		<main>
			<mp4page TITLE="Both Knees Breakdown" />
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
			title: 'Both Knees Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Both Knees Breakdown  video and description' },
			],
		}
	}
}
</script>
