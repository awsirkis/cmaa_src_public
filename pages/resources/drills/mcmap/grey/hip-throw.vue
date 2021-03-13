<template>
	<div>
		<main>
			<mp4page TITLE="Hip Throw" />
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
			title: 'Hip Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Hip Throw  video and description' },
			],
		}
	}
}
</script>
