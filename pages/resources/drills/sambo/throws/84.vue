<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Leg Entwining Throw" />
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
			title: 'Rolling Leg Entwining Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Leg Entwining Throw  video and description' },
			],
		}
	}
}
</script>
