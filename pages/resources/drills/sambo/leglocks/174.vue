<template>
	<div>
		<main>
			<mp4page TITLE="Near Leg Lace to Bent Leglock" />
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
			title: 'Near Leg Lace to Bent Leglock | CMAA',
			meta : [
				{ name: 'description', content : 'Near Leg Lace to Bent Leglock  video and description' },
			],
		}
	}
}
</script>
