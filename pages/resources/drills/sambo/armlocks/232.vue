<template>
	<div>
		<main>
			<mp4page TITLE="Thigh Trap and Uppercut Lever" />
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
			title: 'Thigh Trap and Uppercut Lever | CMAA',
			meta : [
				{ name: 'description', content : 'Thigh Trap and Uppercut Lever  video and description' },
			],
		}
	}
}
</script>
