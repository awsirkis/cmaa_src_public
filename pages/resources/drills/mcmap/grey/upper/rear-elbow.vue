<template>
	<div>
		<main>
			<mp4page TITLE="Rear Horizontal Elbow" />
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
			title: 'Rear Horizontal Elbow | CMAA',
			meta : [
				{ name: 'description', content : 'Rear Horizontal Elbow  video and description' },
			],
		}
	}
}
</script>
