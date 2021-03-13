<template>
	<div>
		<main>
			<mp4page TITLE="Duck Under Pick-up Hip Throw" />
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
			title: 'Duck Under Pick-up Hip Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Duck Under Pick-up Hip Throw  video and description' },
			],
		}
	}
}
</script>
