<template>
	<div>
		<main>
			<mp4page TITLE="Basic Leg Press Armbar" />
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
			title: 'Basic Leg Press Armbar | CMAA',
			meta : [
				{ name: 'description', content : 'Basic Leg Press Armbar  video and description' },
			],
		}
	}
}
</script>
