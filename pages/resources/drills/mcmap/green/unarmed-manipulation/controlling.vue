<template>
	<div>
		<main>
			<mp4page TITLE="Controlling Techniques" />
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
			title: 'Controlling Techniques | CMAA',
			meta : [
				{ name: 'description', content : 'Controlling Techniques  video and description' },
			],
		}
	}
}
</script>
