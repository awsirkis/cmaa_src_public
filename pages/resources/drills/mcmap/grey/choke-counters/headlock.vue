<template>
	<div>
		<main>
			<mp4page TITLE="Counter to Headlock" />
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
			title: 'Counter to Headlock | CMAA',
			meta : [
				{ name: 'description', content : 'Counter to Headlock  video and description' },
			],
		}
	}
}
</script>
