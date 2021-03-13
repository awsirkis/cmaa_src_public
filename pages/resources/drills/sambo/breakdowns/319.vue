<template>
	<div>
		<main>
			<mp4page TITLE="Sambo Switch to Both Legs Breakdown" />
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
			title: 'Sambo Switch to Both Legs Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Sambo Switch to Both Legs Breakdown  video and description' },
			],
		}
	}
}
</script>
