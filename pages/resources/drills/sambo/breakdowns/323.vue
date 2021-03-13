<template>
	<div>
		<main>
			<mp4page TITLE="Peterson Roll" />
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
			title: 'Peterson Roll | CMAA',
			meta : [
				{ name: 'description', content : 'Peterson Roll  video and description' },
			],
		}
	}
}
</script>
