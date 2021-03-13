<template>
	<div>
		<main>
			<mp4page TITLE="Low Split Thorw on One Knee" />
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
			title: 'Low Split Thorw on One Knee | CMAA',
			meta : [
				{ name: 'description', content : 'Low Split Thorw on One Knee  video and description' },
			],
		}
	}
}
</script>
