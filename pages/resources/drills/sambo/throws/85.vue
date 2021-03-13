<template>
	<div>
		<main>
			<mp4page TITLE="Rolling Arm-Through-Legs Throw" />
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
			title: 'Rolling Arm-Through-Legs Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Rolling Arm-Through-Legs Throw  video and description' },
			],
		}
	}
}
</script>
