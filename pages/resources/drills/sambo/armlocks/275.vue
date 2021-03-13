<template>
	<div>
		<main>
			<mp4page TITLE="Square Grip Trap Straight Armlock" />
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
			title: 'Square Grip Trap Straight Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Square Grip Trap Straight Armlock  video and description' },
			],
		}
	}
}
</script>
