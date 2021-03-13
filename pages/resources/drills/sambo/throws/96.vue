<template>
	<div>
		<main>
			<mp4page TITLE="Foot Kick Throw" />
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
			title: 'Foot Kick Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Foot Kick Throw  video and description' },
			],
		}
	}
}
</script>
