<template>
	<div>
		<main>
			<mp4page TITLE="Leg Entwining and Lifting Throw w/ Georgian Grip" />
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
			title: 'Leg Entwining and Lifting Throw w/ Georgian Grip | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Entwining and Lifting Throw w/ Georgian Grip  video and description' },
			],
		}
	}
}
</script>
