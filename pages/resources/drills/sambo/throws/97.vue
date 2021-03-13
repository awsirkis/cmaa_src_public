<template>
	<div>
		<main>
			<mp4page TITLE="Inside Foot Sweep" />
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
			title: 'Inside Foot Sweep | CMAA',
			meta : [
				{ name: 'description', content : 'Inside Foot Sweep  video and description' },
			],
		}
	}
}
</script>
