<template>
	<div>
		<main>
			<mp4page TITLE="Enhanced Pain Compliance" />
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
			title: 'Enhanced Pain Compliance | CMAA',
			meta : [
				{ name: 'description', content : 'Enhanced Pain Compliance  video and description' },
			],
		}
	}
}
</script>
