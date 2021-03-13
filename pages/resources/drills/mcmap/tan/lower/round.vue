<template>
	<div>
		<main>
			<mp4page TITLE="Round Kick" />
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
			title: 'Round Kick | CMAA',
			meta : [
				{ name: 'description', content : 'Round Kick  video and description' },
			],
		}
	}
}
</script>
