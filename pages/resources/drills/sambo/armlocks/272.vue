<template>
	<div>
		<main>
			<mp4page TITLE="Straight Armlock from Standing" />
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
			title: 'Straight Armlock from Standing | CMAA',
			meta : [
				{ name: 'description', content : 'Straight Armlock from Standing  video and description' },
			],
		}
	}
}
</script>
