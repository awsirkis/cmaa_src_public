<template>
	<div>
		<main>
			<mp4page TITLE="Inside Leg Grab Rolling Throw" />
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
			title: 'Inside Leg Grab Rolling Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Inside Leg Grab Rolling Throw  video and description' },
			],
		}
	}
}
</script>
