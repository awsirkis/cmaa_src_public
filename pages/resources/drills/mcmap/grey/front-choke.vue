<template>
	<div>
		<main>
			<mp4page TITLE="Front Choke" />
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
			title: 'Front Choke | CMAA',
			meta : [
				{ name: 'description', content : 'Front Choke  video and description' },
			],
		}
	}
}
</script>
