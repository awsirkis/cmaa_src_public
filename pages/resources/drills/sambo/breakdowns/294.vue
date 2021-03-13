<template>
	<div>
		<main>
			<mp4page TITLE="Cradle Hold" />
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
			title: 'Cradle Hold | CMAA',
			meta : [
				{ name: 'description', content : 'Cradle Hold  video and description' },
			],
		}
	}
}
</script>
