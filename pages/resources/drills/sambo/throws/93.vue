<template>
	<div>
		<main>
			<mp4page TITLE="Rear Leg-Lift Throw" />
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
			title: 'Rear Leg-Lift Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Rear Leg-Lift Throw  video and description' },
			],
		}
	}
}
</script>
