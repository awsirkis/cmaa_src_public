<template>
	<div>
		<main>
			<mp4page TITLE="Leg Lock from Ground" />
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
			title: 'Leg Lock from Ground | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Lock from Ground  video and description' },
			],
		}
	}
}
</script>
