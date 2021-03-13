<template>
	<div>
		<main>
			<mp4page TITLE="Kick Back to Bent Leglock" />
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
			title: 'Kick Back to Bent Leglock | CMAA',
			meta : [
				{ name: 'description', content : 'Kick Back to Bent Leglock  video and description' },
			],
		}
	}
}
</script>
