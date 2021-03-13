<template>
	<div>
		<main>
			<mp4page TITLE="Armed Blocks" />
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
			title: 'Armed Blocks | CMAA',
			meta : [
				{ name: 'description', content : 'Armed Blocks  video and description' },
			],
		}
	}
}
</script>
