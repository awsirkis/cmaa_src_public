<template>
	<div>
		<main>
			<mp4page TITLE="Bent Armbar from Scarf Hold" />
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
			title: 'Bent Armbar from Scarf Hold | CMAA',
			meta : [
				{ name: 'description', content : 'Bent Armbar from Scarf Hold  video and description' },
			],
		}
	}
}
</script>
