<template>
	<div>
		<main>
			<mp4page TITLE="Cross Grip Hip Sweep" />
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
			title: 'Cross Grip Hip Sweep | CMAA',
			meta : [
				{ name: 'description', content : 'Cross Grip Hip Sweep  video and description' },
			],
		}
	}
}
</script>
