<template>
	<div>
		<main>
			<mp4page TITLE="2-Handed Pistol to the Head" />
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
			title: '2-Handed Pistol to the Head | CMAA',
			meta : [
				{ name: 'description', content : '2-Handed Pistol to the Head  video and description' },
			],
		}
	}
}
</script>
