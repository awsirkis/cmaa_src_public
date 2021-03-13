<template>
	<div>
		<main>
			<mp4page TITLE="Joint Manipulation" />
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
			title: 'Joint Manipulation | CMAA',
			meta : [
				{ name: 'description', content : 'Joint Manipulation  video and description' },
			],
		}
	}
}
</script>
