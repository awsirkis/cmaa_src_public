<template>
	<div>
		<main>
			<mp4page TITLE="Same Side Grab - Back" />
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
			title: 'Same Side Grab - Back | CMAA',
			meta : [
				{ name: 'description', content : 'Same Side Grab - Back  video and description' },
			],
		}
	}
}
</script>
