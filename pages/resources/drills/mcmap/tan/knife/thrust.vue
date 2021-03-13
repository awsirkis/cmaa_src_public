<template>
	<div>
		<main>
			<mp4page TITLE="Vertical Thrust" />
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
			title: 'Vertical Thrust | CMAA',
			meta : [
				{ name: 'description', content : 'Vertical Thrust  video and description' },
			],
		}
	}
}
</script>
