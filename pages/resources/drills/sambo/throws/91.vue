<template>
	<div>
		<main>
			<mp4page TITLE="Leg Pickup and Inside Leg Hook" />
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
			title: 'Leg Pickup and Inside Leg Hook | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Pickup and Inside Leg Hook  video and description' },
			],
		}
	}
}
</script>
