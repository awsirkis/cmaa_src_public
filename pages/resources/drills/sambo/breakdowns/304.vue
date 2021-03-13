<template>
	<div>
		<main>
			<mp4page TITLE="Near Wrist to Nelson Breakdown" />
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
			title: 'Near Wrist to Nelson Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Near Wrist to Nelson Breakdown  video and description' },
			],
		}
	}
}
</script>
