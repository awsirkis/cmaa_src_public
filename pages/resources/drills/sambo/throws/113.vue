<template>
	<div>
		<main>
			<mp4page TITLE="Leg Pick-up Tightwaist and Thigh Sweep Throw" />
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
			title: 'Leg Pick-up Tightwaist and Thigh Sweep Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Pick-up Tightwaist and Thigh Sweep Throw  video and description' },
			],
		}
	}
}
</script>
