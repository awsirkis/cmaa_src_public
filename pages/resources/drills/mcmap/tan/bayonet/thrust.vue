<template>
	<div>
		<main>
			<mp4page TITLE="Bayonet Thrust" />
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
			title: 'Bayonet Thrust | CMAA',
			meta : [
				{ name: 'description', content : 'Bayonet Thrust  video and description' },
			],
		}
	}
}
</script>
