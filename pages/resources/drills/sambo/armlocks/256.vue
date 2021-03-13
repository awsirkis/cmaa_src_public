<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Bent Armlock" />
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
			title: 'Rolling Bent Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Bent Armlock  video and description' },
			],
		}
	}
}
</script>
