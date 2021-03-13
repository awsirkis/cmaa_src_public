<template>
	<div>
		<main>
			<mp4page TITLE="Outside Reap Throw" />
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
			title: 'Outside Reap Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Outside Reap Throw  video and description' },
			],
		}
	}
}
</script>
