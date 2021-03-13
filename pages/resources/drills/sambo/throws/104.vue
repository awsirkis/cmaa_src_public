<template>
	<div>
		<main>
			<mp4page TITLE="Inner Thigh Throw to Ankle Pick" />
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
			title: 'Inner Thigh Throw to Ankle Pick | CMAA',
			meta : [
				{ name: 'description', content : 'Inner Thigh Throw to Ankle Pick  video and description' },
			],
		}
	}
}
</script>
