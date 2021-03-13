<template>
	<div>
		<main>
			<mp4page TITLE="Side Drop Knee Throw" />
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
			title: 'Side Drop Knee Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Side Drop Knee Throw  video and description' },
			],
		}
	}
}
</script>
