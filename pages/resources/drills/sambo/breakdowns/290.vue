<template>
	<div>
		<main>
			<mp4page TITLE="Chest Hold" />
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
			title: 'Chest Hold | CMAA',
			meta : [
				{ name: 'description', content : 'Chest Hold  video and description' },
			],
		}
	}
}
</script>
