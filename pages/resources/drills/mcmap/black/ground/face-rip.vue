<template>
	<div>
		<main>
			<mp4page TITLE="Face Rip from Guard" />
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
			title: 'Face Rip from Guard | CMAA',
			meta : [
				{ name: 'description', content : 'Face Rip from Guard  video and description' },
			],
		}
	}
}
</script>
