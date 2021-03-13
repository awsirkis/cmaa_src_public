<template>
	<div>
		<main>
			<mp4page TITLE="Ankle Pick Breakdown" />
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
			title: 'Ankle Pick Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Ankle Pick Breakdown  video and description' },
			],
		}
	}
}
</script>
