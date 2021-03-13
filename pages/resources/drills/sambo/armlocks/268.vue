<template>
	<div>
		<main>
			<mp4page TITLE="Front Sit-through Straight Armlock" />
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
			title: 'Front Sit-through Straight Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Front Sit-through Straight Armlock  video and description' },
			],
		}
	}
}
</script>
