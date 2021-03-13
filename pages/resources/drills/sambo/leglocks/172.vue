<template>
	<div>
		<main>
			<mp4page TITLE="Leg Crank Bent Leglock" />
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
			title: 'Leg Crank Bent Leglock | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Crank Bent Leglock  video and description' },
			],
		}
	}
}
</script>
