<template>
	<div>
		<main>
			<mp4page TITLE="Far Arm-Near Leg Breakdown" />
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
			title: 'Far Arm-Near Leg Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Far Arm-Near Leg Breakdown  video and description' },
			],
		}
	}
}
</script>
