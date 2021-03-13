<template>
	<div>
		<main>
			<mp4page TITLE="Distracter" />
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
			title: 'Distracter | CMAA',
			meta : [
				{ name: 'description', content : 'Distracter  video and description' },
			],
		}
	}
}
</script>
