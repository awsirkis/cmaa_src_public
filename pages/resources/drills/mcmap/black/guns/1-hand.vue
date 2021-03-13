<template>
	<div>
		<main>
			<mp4page TITLE="1-Handed Pistol to the Head" />
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
			title: '1-Handed Pistol to the Head | CMAA',
			meta : [
				{ name: 'description', content : '1-Handed Pistol to the Head  video and description' },
			],
		}
	}
}
</script>
