<template>
	<div>
		<main>
			<mp4page TITLE="Side Kick" />
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
			title: 'Side Kick | CMAA',
			meta : [
				{ name: 'description', content : 'Side Kick  video and description' },
			],
		}
	}
}
</script>
