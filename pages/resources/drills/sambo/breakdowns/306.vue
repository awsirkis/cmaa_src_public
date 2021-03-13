<template>
	<div>
		<main>
			<mp4page TITLE="Gut Wrench" />
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
			title: 'Gut Wrench | CMAA',
			meta : [
				{ name: 'description', content : 'Gut Wrench  video and description' },
			],
		}
	}
}
</script>
