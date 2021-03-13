<template>
	<div>
		<main>
			<mp4page TITLE="Sitting Kneebar" />
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
			title: 'Sitting Kneebar | CMAA',
			meta : [
				{ name: 'description', content : 'Sitting Kneebar  video and description' },
			],
		}
	}
}
</script>
