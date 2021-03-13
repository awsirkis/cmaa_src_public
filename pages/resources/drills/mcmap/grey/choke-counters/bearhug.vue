<template>
	<div>
		<main>
			<mp4page TITLE="Bearhug" />
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
			title: 'Bearhug | CMAA',
			meta : [
				{ name: 'description', content : 'Bearhug  video and description' },
			],
		}
	}
}
</script>
