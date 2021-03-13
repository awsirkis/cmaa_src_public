<template>
	<div>
		<main>
			<mp4page TITLE="Armbar Takedown" />
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
			title: 'Armbar Takedown | CMAA',
			meta : [
				{ name: 'description', content : 'Armbar Takedown  video and description' },
			],
		}
	}
}
</script>
