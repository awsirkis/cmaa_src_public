<template>
	<div>
		<main>
			<mp4page TITLE="Bent Arm Lever to Crossbody Armlock" />
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
			title: 'Bent Arm Lever to Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Bent Arm Lever to Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
