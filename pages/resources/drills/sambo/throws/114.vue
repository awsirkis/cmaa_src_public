<template>
	<div>
		<main>
			<mp4page TITLE="Tightwaist Rear Split Throw" />
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
			title: 'Tightwaist Rear Split Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Tightwaist Rear Split Throw  video and description' },
			],
		}
	}
}
</script>
