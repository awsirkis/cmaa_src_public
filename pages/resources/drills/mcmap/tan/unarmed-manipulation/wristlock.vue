<template>
	<div>
		<main>
			<mp4page TITLE="Wristlocks" />
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
			title: 'Wristlocks | CMAA',
			meta : [
				{ name: 'description', content : 'Wristlocks  video and description' },
			],
		}
	}
}
</script>
