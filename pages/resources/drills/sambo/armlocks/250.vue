<template>
	<div>
		<main>
			<mp4page TITLE="Front Chest Hold to Bent Armlock from Tripod" />
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
			title: 'Front Chest Hold to Bent Armlock from Tripod | CMAA',
			meta : [
				{ name: 'description', content : 'Front Chest Hold to Bent Armlock from Tripod  video and description' },
			],
		}
	}
}
</script>
