<template>
	<div>
		<main>
			<mp4page TITLE="Both Legs Throw" />
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
			title: 'Both Legs Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Both Legs Throw  video and description' },
			],
		}
	}
}
</script>
