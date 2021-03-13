<template>
	<div>
		<main>
			<mp4page TITLE="Side Choke from Ground" />
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
			title: 'Side Choke from Ground | CMAA',
			meta : [
				{ name: 'description', content : 'Side Choke from Ground  video and description' },
			],
		}
	}
}
</script>
