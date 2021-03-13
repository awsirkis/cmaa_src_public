<template>
	<div>
		<main>
			<mp4page TITLE="Moving Grab with Both Hands Pulling" />
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
			title: 'Moving Grab with Both Hands Pulling | CMAA',
			meta : [
				{ name: 'description', content : 'Moving Grab with Both Hands Pulling  video and description' },
			],
		}
	}
}
</script>
