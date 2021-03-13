<template>
	<div>
		<main>
			<mp4page TITLE="Pick-up Leg Sweep Throw" />
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
			title: 'Pick-up Leg Sweep Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Pick-up Leg Sweep Throw  video and description' },
			],
		}
	}
}
</script>
