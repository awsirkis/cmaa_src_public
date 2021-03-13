<template>
	<div>
		<main>
			<mp4page TITLE="Leg Entwining and Lifting Throw" />
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
			title: 'Leg Entwining and Lifting Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Entwining and Lifting Throw  video and description' },
			],
		}
	}
}
</script>
