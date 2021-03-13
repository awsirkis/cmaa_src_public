<template>
	<div>
		<main>
			<mp4page TITLE="Straight Armlock with Knee from Head-and-Arm Side Chest Hold-down" />
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
			title: 'Straight Armlock with Knee from Head-and-Arm Side Chest Hold-down | CMAA',
			meta : [
				{ name: 'description', content : 'Straight Armlock with Knee from Head-and-Arm Side Chest Hold-down  video and description' },
			],
		}
	}
}
</script>
