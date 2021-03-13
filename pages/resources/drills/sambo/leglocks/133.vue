<template>
	<div>
		<main>
			<mp4page TITLE="Double Leg Attack to Leg Lace Ankle Lock" />
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
			title: 'Double Leg Attack to Leg Lace Ankle Lock | CMAA',
			meta : [
				{ name: 'description', content : 'Double Leg Attack to Leg Lace Ankle Lock  video and description' },
			],
		}
	}
}
</script>
