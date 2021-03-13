<template>
	<div>
		<main>
			<mp4page TITLE="Kick Over Bent Armlock" />
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
			title: 'Kick Over Bent Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Kick Over Bent Armlock  video and description' },
			],
		}
	}
}
</script>
