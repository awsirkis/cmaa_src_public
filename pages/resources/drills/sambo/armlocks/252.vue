<template>
	<div>
		<main>
			<mp4page TITLE="Downward Bent Armlock from Headsit" />
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
			title: 'Downward Bent Armlock from Headsit | CMAA',
			meta : [
				{ name: 'description', content : 'Downward Bent Armlock from Headsit  video and description' },
			],
		}
	}
}
</script>
