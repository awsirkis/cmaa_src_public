<template>
	<div>
		<main>
			<mp4page TITLE="Hammerfist" />
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
			title: 'Hammerfist | CMAA',
			meta : [
				{ name: 'description', content : 'Hammerfist  video and description' },
			],
		}
	}
}
</script>
