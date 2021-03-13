<template>
	<div>
		<main>
			<mp4page TITLE="Armbar from Mount" />
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
			title: 'Armbar from Mount | CMAA',
			meta : [
				{ name: 'description', content : 'Armbar from Mount  video and description' },
			],
		}
	}
}
</script>
