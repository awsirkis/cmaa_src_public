<template>
	<div>
		<main>
			<mp4page TITLE="Lower Strikes" />
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
			title: 'Lower Strikes | CMAA',
			meta : [
				{ name: 'description', content : 'Lower Strikes  video and description' },
			],
		}
	}
}
</script>
