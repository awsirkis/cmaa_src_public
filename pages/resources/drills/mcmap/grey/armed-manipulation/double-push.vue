<template>
	<div>
		<main>
			<mp4page TITLE="Stationary Grab with Both Hands Pushing" />
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
			title: 'Stationary Grab with Both Hands Pushing | CMAA',
			meta : [
				{ name: 'description', content : 'Stationary Grab with Both Hands Pushing  video and description' },
			],
		}
	}
}
</script>
