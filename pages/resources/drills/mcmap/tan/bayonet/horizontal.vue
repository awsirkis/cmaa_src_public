<template>
	<div>
		<main>
			<mp4page TITLE="Horizontal Buttstroke" />
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
			title: 'Horizontal Buttstroke | CMAA',
			meta : [
				{ name: 'description', content : 'Horizontal Buttstroke  video and description' },
			],
		}
	}
}
</script>
