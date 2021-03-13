<template>
	<div>
		<main>
			<mp4page TITLE="Foot Kick/Push to Crossbody Amrlock" />
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
			title: 'Foot Kick/Push to Crossbody Amrlock | CMAA',
			meta : [
				{ name: 'description', content : 'Foot Kick/Push to Crossbody Amrlock  video and description' },
			],
		}
	}
}
</script>
