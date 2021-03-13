<template>
	<div>
		<main>
			<mp4page TITLE="Same Side Grab - Front" />
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
			title: 'Same Side Grab - Front | CMAA',
			meta : [
				{ name: 'description', content : 'Same Side Grab - Front  video and description' },
			],
		}
	}
}
</script>
