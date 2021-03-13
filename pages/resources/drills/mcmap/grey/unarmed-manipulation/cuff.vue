<template>
	<div>
		<main>
			<mp4page TITLE="Wrist Come-Along to Cuff" />
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
			title: 'Wrist Come-Along to Cuff | CMAA',
			meta : [
				{ name: 'description', content : 'Wrist Come-Along to Cuff  video and description' },
			],
		}
	}
}
</script>
