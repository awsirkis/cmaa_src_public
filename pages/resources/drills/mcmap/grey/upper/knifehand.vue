<template>
	<div>
		<main>
			<mp4page TITLE="Knifehand" />
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
			title: 'Knifehand | CMAA',
			meta : [
				{ name: 'description', content : 'Knifehand  video and description' },
			],
		}
	}
}
</script>
