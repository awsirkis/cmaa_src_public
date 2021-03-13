<template>
	<div>
		<main>
			<mp4page TITLE="Leg Drag to Crossbody Armlock" />
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
			title: 'Leg Drag to Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Drag to Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
