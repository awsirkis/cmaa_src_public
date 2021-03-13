<template>
	<div>
		<main>
			<mp4page TITLE="Head-and-Arm Side Chest Hold to Bent Armlock" />
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
			title: 'Head-and-Arm Side Chest Hold to Bent Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Head-and-Arm Side Chest Hold to Bent Armlock  video and description' },
			],
		}
	}
}
</script>
