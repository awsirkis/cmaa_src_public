<template>
	<div>
		<main>
			<mp4page TITLE="Basic Heel Hook" />
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
			title: 'Basic Heel Hook | CMAA',
			meta : [
				{ name: 'description', content : 'Basic Heel Hook  video and description' },
			],
		}
	}
}
</script>
