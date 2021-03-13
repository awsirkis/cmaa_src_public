<template>
	<div>
		<main>
			<mp4page TITLE="Arm-and-Leg Lever" />
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
			title: 'Arm-and-Leg Lever | CMAA',
			meta : [
				{ name: 'description', content : 'Arm-and-Leg Lever  video and description' },
			],
		}
	}
}
</script>
