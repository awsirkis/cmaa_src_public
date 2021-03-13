<template>
	<div>
		<main>
			<mp4page TITLE="Knee Drop Tightwaist Hip Throw" />
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
			title: 'Knee Drop Tightwaist Hip Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Knee Drop Tightwaist Hip Throw  video and description' },
			],
		}
	}
}
</script>
