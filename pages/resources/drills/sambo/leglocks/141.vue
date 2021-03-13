<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Straight Leg Lock from Front Chest Holddown" />
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
			title: 'Rolling Straight Leg Lock from Front Chest Holddown | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Straight Leg Lock from Front Chest Holddown  video and description' },
			],
		}
	}
}
</script>
