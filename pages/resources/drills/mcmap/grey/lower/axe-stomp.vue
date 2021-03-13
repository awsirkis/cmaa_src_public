<template>
	<div>
		<main>
			<mp4page TITLE="Axe Stomp" />
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
			title: 'Axe Stomp | CMAA',
			meta : [
				{ name: 'description', content : 'Axe Stomp  video and description' },
			],
		}
	}
}
</script>
