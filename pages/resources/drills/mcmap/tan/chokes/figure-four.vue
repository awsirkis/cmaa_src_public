<template>
	<div>
		<main>
			<mp4page TITLE="Figure Four Choke" />
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
			title: 'Figure Four Choke | CMAA',
			meta : [
				{ name: 'description', content : 'Figure Four Choke  video and description' },
			],
		}
	}
}
</script>
