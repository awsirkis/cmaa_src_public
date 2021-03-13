<template>
	<div>
		<main>
			<mp4page TITLE="Counter to Lead Punch" />
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
			title: 'Counter to Lead Punch | CMAA',
			meta : [
				{ name: 'description', content : 'Counter to Lead Punch  video and description' },
			],
		}
	}
}
</script>
