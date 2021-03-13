<template>
	<div>
		<main>
			<mp4page TITLE="Upper Chest Hold" />
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
			title: 'Upper Chest Hold | CMAA',
			meta : [
				{ name: 'description', content : 'Upper Chest Hold  video and description' },
			],
		}
	}
}
</script>
