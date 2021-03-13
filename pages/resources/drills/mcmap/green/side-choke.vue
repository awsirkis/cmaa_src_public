<template>
	<div>
		<main>
			<mp4page TITLE="Side Choke" />
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
			title: 'Side Choke | CMAA',
			meta : [
				{ name: 'description', content : 'Side Choke  video and description' },
			],
		}
	}
}
</script>
