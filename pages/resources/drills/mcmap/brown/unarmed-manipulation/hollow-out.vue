<template>
	<div>
		<main>
			<mp4page TITLE="Hollow-Out Counter" />
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
			title: 'Hollow-Out Counter | CMAA',
			meta : [
				{ name: 'description', content : 'Hollow-Out Counter  video and description' },
			],
		}
	}
}
</script>
