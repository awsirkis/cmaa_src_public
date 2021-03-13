<template>
	<div>
		<main>
			<mp4page TITLE="Front Both Legs Breakdown" />
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
			title: 'Front Both Legs Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Front Both Legs Breakdown  video and description' },
			],
		}
	}
}
</script>
