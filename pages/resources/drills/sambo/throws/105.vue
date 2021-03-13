<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Leg-lift Throw" />
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
			title: 'Rolling Leg-lift Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Leg-lift Throw  video and description' },
			],
		}
	}
}
</script>
