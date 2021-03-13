<template>
	<div>
		<main>
			<mp4page TITLE="Spinning Crossbody Amrlock to Prevent Standing" />
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
			title: 'Spinning Crossbody Amrlock to Prevent Standing | CMAA',
			meta : [
				{ name: 'description', content : 'Spinning Crossbody Amrlock to Prevent Standing  video and description' },
			],
		}
	}
}
</script>
