<template>
	<div>
		<main>
			<mp4page TITLE="Wristlock Come-Along" />
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
			title: 'Wristlock Come-Along | CMAA',
			meta : [
				{ name: 'description', content : 'Wristlock Come-Along  video and description' },
			],
		}
	}
}
</script>
