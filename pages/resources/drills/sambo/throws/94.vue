<template>
	<div>
		<main>
			<mp4page TITLE="Sliding Thigh Sweep" />
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
			title: 'Sliding Thigh Sweep | CMAA',
			meta : [
				{ name: 'description', content : 'Sliding Thigh Sweep  video and description' },
			],
		}
	}
}
</script>
