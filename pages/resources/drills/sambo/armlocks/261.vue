<template>
	<div>
		<main>
			<mp4page TITLE="Near Arm Sit Back Compression Bent Armlock" />
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
			title: 'Near Arm Sit Back Compression Bent Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Near Arm Sit Back Compression Bent Armlock  video and description' },
			],
		}
	}
}
</script>
