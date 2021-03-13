<template>
	<div>
		<main>
			<mp4page TITLE="Windmill Throw" />
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
			title: 'Windmill Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Windmill Throw  video and description' },
			],
		}
	}
}
</script>
