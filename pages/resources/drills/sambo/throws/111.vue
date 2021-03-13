<template>
	<div>
		<main>
			<mp4page TITLE="Ankle Lift Throw" />
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
			title: 'Ankle Lift Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Ankle Lift Throw  video and description' },
			],
		}
	}
}
</script>
