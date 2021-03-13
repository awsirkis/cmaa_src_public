<template>
	<div>
		<main>
			<mp4page TITLE="Throw to Hold-down" />
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
			title: 'Throw to Hold-down | CMAA',
			meta : [
				{ name: 'description', content : 'Throw to Hold-down  video and description' },
			],
		}
	}
}
</script>
