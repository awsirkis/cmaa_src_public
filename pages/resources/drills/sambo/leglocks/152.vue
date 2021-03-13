<template>
	<div>
		<main>
			<mp4page TITLE="Ankle Fake to Rolling Leg Lace and Leglock" />
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
			title: 'Ankle Fake to Rolling Leg Lace and Leglock | CMAA',
			meta : [
				{ name: 'description', content : 'Ankle Fake to Rolling Leg Lace and Leglock  video and description' },
			],
		}
	}
}
</script>
