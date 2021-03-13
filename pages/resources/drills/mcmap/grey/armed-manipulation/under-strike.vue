<template>
	<div>
		<main>
			<mp4page TITLE="Underhanded Grab with Strikes" />
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
			title: 'Underhanded Grab with Strikes | CMAA',
			meta : [
				{ name: 'description', content : 'Underhanded Grab with Strikes  video and description' },
			],
		}
	}
}
</script>
