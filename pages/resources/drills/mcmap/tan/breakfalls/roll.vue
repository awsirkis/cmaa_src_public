<template>
	<div>
		<main>
			<mp4page TITLE="Forward Roll" />
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
			title: 'Forward Roll | CMAA',
			meta : [
				{ name: 'description', content : 'Forward Roll  video and description' },
			],
		}
	}
}
</script>
