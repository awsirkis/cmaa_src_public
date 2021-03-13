<template>
	<div>
		<main>
			<mp4page TITLE="Armbar Firearm Retention" />
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
			title: 'Armbar Firearm Retention | CMAA',
			meta : [
				{ name: 'description', content : 'Armbar Firearm Retention  video and description' },
			],
		}
	}
}
</script>
