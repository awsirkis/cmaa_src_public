<template>
	<div>
		<main>
			<mp4page TITLE="Hed-and-Arm Hip Throw Breakdown" />
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
			title: 'Hed-and-Arm Hip Throw Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Hed-and-Arm Hip Throw Breakdown  video and description' },
			],
		}
	}
}
</script>
