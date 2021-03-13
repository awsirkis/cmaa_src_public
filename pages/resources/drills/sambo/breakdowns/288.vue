<template>
	<div>
		<main>
			<mp4page TITLE="Escape from Hold-down" />
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
			title: 'Escape from Hold-down | CMAA',
			meta : [
				{ name: 'description', content : 'Escape from Hold-down  video and description' },
			],
		}
	}
}
</script>
