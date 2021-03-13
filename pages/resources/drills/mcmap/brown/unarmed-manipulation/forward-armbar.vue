<template>
	<div>
		<main>
			<mp4page TITLE="Forward Armbar Counter" />
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
			title: 'Forward Armbar Counter | CMAA',
			meta : [
				{ name: 'description', content : 'Forward Armbar Counter  video and description' },
			],
		}
	}
}
</script>
