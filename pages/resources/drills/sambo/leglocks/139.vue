<template>
	<div>
		<main>
			<mp4page TITLE="Single Leg Ride to Hip Lock" />
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
			title: 'Single Leg Ride to Hip Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Single Leg Ride to Hip Lock  video and description' },
			],
		}
	}
}
</script>
