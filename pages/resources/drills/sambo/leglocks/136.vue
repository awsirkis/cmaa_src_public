<template>
	<div>
		<main>
			<mp4page TITLE="Single Leg Ride to Cradle Hold-down to Toehold" />
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
			title: 'Single Leg Ride to Cradle Hold-down to Toehold | CMAA',
			meta : [
				{ name: 'description', content : 'Single Leg Ride to Cradle Hold-down to Toehold  video and description' },
			],
		}
	}
}
</script>
