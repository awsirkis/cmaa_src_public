<template>
	<div>
		<main>
			<mp4page TITLE="Triangle Choke" />
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
			title: 'Triangle Choke | CMAA',
			meta : [
				{ name: 'description', content : 'Triangle Choke  video and description' },
			],
		}
	}
}
</script>
