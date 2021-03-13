<template>
	<div>
		<main>
			<mp4page TITLE="Bayonet Slash" />
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
			title: 'Bayonet Slash | CMAA',
			meta : [
				{ name: 'description', content : 'Bayonet Slash  video and description' },
			],
		}
	}
}
</script>
