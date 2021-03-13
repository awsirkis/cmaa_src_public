<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Straight Leglock" />
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
			title: 'Rolling Straight Leglock | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Straight Leglock  video and description' },
			],
		}
	}
}
</script>
