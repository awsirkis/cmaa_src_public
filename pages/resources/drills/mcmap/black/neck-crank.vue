<template>
	<div>
		<main>
			<mp4page TITLE="Neck Crank Takedown" />
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
			title: 'Neck Crank Takedown | CMAA',
			meta : [
				{ name: 'description', content : 'Neck Crank Takedown  video and description' },
			],
		}
	}
}
</script>
