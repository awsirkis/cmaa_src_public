<template>
	<div>
		<main>
			<mp4page TITLE="Reverse Slash" />
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
			title: 'Reverse Slash | CMAA',
			meta : [
				{ name: 'description', content : 'Reverse Slash  video and description' },
			],
		}
	}
}
</script>
