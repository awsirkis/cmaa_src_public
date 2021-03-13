<template>
	<div>
		<main>
			<mp4page TITLE="Bulldogging" />
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
			title: 'Bulldogging | CMAA',
			meta : [
				{ name: 'description', content : 'Bulldogging  video and description' },
			],
		}
	}
}
</script>
