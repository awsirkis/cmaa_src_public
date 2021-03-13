<template>
	<div>
		<main>
			<mp4page TITLE="Inner Thigh Throw (Leg Style)" />
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
			title: 'Inner Thigh Throw (Leg Style) | CMAA',
			meta : [
				{ name: 'description', content : 'Inner Thigh Throw (Leg Style)  video and description' },
			],
		}
	}
}
</script>
