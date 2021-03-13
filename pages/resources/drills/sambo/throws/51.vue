<template>
	<div>
		<main>
			<mp4page TITLE="Read Throw as a Counter" />
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
			title: 'Read Throw as a Counter | CMAA',
			meta : [
				{ name: 'description', content : 'Read Throw as a Counter  video and description' },
			],
		}
	}
}
</script>
