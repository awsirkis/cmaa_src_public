<template>
	<div>
		<main>
			<mp4page TITLE="Leg Scissors Throw" />
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
			title: 'Leg Scissors Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Scissors Throw  video and description' },
			],
		}
	}
}
</script>
