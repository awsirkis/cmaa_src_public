<template>
	<div>
		<main>
			<mp4page TITLE="Both Arm Hug to Crossbody Armlock" />
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
			title: 'Both Arm Hug to Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Both Arm Hug to Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
