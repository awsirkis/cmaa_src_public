<template>
	<div>
		<main>
			<mp4page TITLE="Reverse Armbar Counter" />
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
			title: 'Reverse Armbar Counter | CMAA',
			meta : [
				{ name: 'description', content : 'Reverse Armbar Counter  video and description' },
			],
		}
	}
}
</script>
