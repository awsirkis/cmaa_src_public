<template>
	<div>
		<main>
			<mp4page TITLE="Double Leg Thigh Sweep Throw" />
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
			title: 'Double Leg Thigh Sweep Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Double Leg Thigh Sweep Throw  video and description' },
			],
		}
	}
}
</script>
