<template>
	<div>
		<main>
			<mp4page TITLE="Cross Grip Tightwaist Hip Throw" />
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
			title: 'Cross Grip Tightwaist Hip Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Cross Grip Tightwaist Hip Throw  video and description' },
			],
		}
	}
}
</script>
