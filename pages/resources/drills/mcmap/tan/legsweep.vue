<template>
	<div>
		<main>
			<mp4page TITLE="Legsweep" />
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
			title: 'Legsweep | CMAA',
			meta : [
				{ name: 'description', content : 'Legsweep  video and description' },
			],
		}
	}
}
</script>
