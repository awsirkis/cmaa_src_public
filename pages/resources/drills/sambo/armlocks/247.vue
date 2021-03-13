<template>
	<div>
		<main>
			<mp4page TITLE="Upper Chest Hold to Bent Armlock (Downward)" />
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
			title: 'Upper Chest Hold to Bent Armlock (Downward) | CMAA',
			meta : [
				{ name: 'description', content : 'Upper Chest Hold to Bent Armlock (Downward)  video and description' },
			],
		}
	}
}
</script>
