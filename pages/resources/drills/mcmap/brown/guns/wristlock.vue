<template>
	<div>
		<main>
			<mp4page TITLE="Wristlock Firearm Retention" />
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
			title: 'Wristlock Firearm Retention | CMAA',
			meta : [
				{ name: 'description', content : 'Wristlock Firearm Retention  video and description' },
			],
		}
	}
}
</script>
