<template>
	<div>
		<main>
			<mp4page TITLE="Offline Buttstroke" />
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
			title: 'Offline Buttstroke | CMAA',
			meta : [
				{ name: 'description', content : 'Offline Buttstroke  video and description' },
			],
		}
	}
}
</script>
