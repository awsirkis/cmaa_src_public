<template>
	<div>
		<main>
			<mp4page TITLE="Bent Armlock from Bottom" />
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
			title: 'Bent Armlock from Bottom | CMAA',
			meta : [
				{ name: 'description', content : 'Bent Armlock from Bottom  video and description' },
			],
		}
	}
}
</script>
