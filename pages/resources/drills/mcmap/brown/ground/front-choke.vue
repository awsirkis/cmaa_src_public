<template>
	<div>
		<main>
			<mp4page TITLE="Front Choke from Ground" />
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
			title: 'Front Choke from Ground | CMAA',
			meta : [
				{ name: 'description', content : 'Front Choke from Ground  video and description' },
			],
		}
	}
}
</script>
