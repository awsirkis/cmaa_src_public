<template>
	<div>
		<main>
			<mp4page TITLE="Both Knees and NEar Nelson Breakdown to Bent Armblock" />
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
			title: 'Both Knees and NEar Nelson Breakdown to Bent Armblock | CMAA',
			meta : [
				{ name: 'description', content : 'Both Knees and NEar Nelson Breakdown to Bent Armblock  video and description' },
			],
		}
	}
}
</script>
