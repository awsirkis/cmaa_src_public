<template>
	<div>
		<main>
			<mp4page TITLE="Hand Sweep Breakdown" />
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
			title: 'Hand Sweep Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Hand Sweep Breakdown  video and description' },
			],
		}
	}
}
</script>
