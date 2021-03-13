<template>
	<div>
		<main>
			<mp4page TITLE="Straight Knee Bar to Far Side" />
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
			title: 'Straight Knee Bar to Far Side | CMAA',
			meta : [
				{ name: 'description', content : 'Straight Knee Bar to Far Side  video and description' },
			],
		}
	}
}
</script>
