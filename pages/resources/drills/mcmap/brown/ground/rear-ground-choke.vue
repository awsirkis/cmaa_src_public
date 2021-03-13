<template>
	<div>
		<main>
			<mp4page TITLE="Rear Choke from Ground" />
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
			title: 'Rear Choke from Ground | CMAA',
			meta : [
				{ name: 'description', content : 'Rear Choke from Ground  video and description' },
			],
		}
	}
}
</script>
