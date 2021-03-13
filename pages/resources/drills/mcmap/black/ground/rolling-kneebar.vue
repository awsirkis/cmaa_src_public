<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Kneebar" />
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
			title: 'Rolling Kneebar | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Kneebar  video and description' },
			],
		}
	}
}
</script>
