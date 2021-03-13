<template>
	<div>
		<main>
			<mp4page TITLE="Sit-through Straight Armlock" />
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
			title: 'Sit-through Straight Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Sit-through Straight Armlock  video and description' },
			],
		}
	}
}
</script>
