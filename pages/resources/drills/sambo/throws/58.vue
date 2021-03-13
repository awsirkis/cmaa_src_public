<template>
	<div>
		<main>
			<mp4page TITLE="Belt Grip" />
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
			title: 'Belt Grip | CMAA',
			meta : [
				{ name: 'description', content : 'Belt Grip  video and description' },
			],
		}
	}
}
</script>
