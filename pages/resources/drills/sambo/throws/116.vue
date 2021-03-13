<template>
	<div>
		<main>
			<mp4page TITLE="Ankle-pick Throw" />
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
			title: 'Ankle-pick Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Ankle-pick Throw  video and description' },
			],
		}
	}
}
</script>
