<template>
	<div>
		<main>
			<mp4page TITLE="Counter to Rear Choke" />
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
			title: 'Counter to Rear Choke | CMAA',
			meta : [
				{ name: 'description', content : 'Counter to Rear Choke  video and description' },
			],
		}
	}
}
</script>
