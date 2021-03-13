<template>
	<div>
		<main>
			<mp4page TITLE="Kick Back to Leg Compression" />
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
			title: 'Kick Back to Leg Compression | CMAA',
			meta : [
				{ name: 'description', content : 'Kick Back to Leg Compression  video and description' },
			],
		}
	}
}
</script>
