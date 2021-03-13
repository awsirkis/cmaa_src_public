<template>
	<div>
		<main>
			<mp4page TITLE="Counter to Rear Bear Hug" />
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
			title: 'Counter to Rear Bear Hug | CMAA',
			meta : [
				{ name: 'description', content : 'Counter to Rear Bear Hug  video and description' },
			],
		}
	}
}
</script>
