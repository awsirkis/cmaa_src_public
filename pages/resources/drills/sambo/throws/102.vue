<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Inner Thigh Throw w/ Arm Overhook" />
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
			title: 'Rolling Inner Thigh Throw w/ Arm Overhook | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Inner Thigh Throw w/ Arm Overhook  video and description' },
			],
		}
	}
}
</script>
