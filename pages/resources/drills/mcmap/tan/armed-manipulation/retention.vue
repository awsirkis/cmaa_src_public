<template>
	<div>
		<main>
			<mp4page TITLE="Rifle and Shotgun Retention" />
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
			title: 'Rifle and Shotgun Retention | CMAA',
			meta : [
				{ name: 'description', content : 'Rifle and Shotgun Retention  video and description' },
			],
		}
	}
}
</script>
