<template>
	<div>
		<main>
			<mp4page TITLE="Front Kick" />
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
			title: 'Front Kick | CMAA',
			meta : [
				{ name: 'description', content : 'Front Kick  video and description' },
			],
		}
	}
}
</script>
