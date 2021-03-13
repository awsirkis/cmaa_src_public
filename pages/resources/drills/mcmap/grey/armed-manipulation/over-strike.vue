<template>
	<div>
		<main>
			<mp4page TITLE="Overhanded Grab with Strikes" />
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
			title: 'Overhanded Grab with Strikes | CMAA',
			meta : [
				{ name: 'description', content : 'Overhanded Grab with Strikes  video and description' },
			],
		}
	}
}
</script>
