<template>
	<div>
		<main>
			<mp4page TITLE="Armbar from Guard" />
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
			title: 'Armbar from Guard | CMAA',
			meta : [
				{ name: 'description', content : 'Armbar from Guard  video and description' },
			],
		}
	}
}
</script>
