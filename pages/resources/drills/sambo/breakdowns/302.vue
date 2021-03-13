<template>
	<div>
		<main>
			<mp4page TITLE="Both Elbows Breakdown" />
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
			title: 'Both Elbows Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Both Elbows Breakdown  video and description' },
			],
		}
	}
}
</script>
