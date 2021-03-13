<template>
	<div>
		<main>
			<mp4page TITLE="Head Side Triangle Compression Bent Armlock from Leg Press" />
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
			title: 'Head Side Triangle Compression Bent Armlock from Leg Press | CMAA',
			meta : [
				{ name: 'description', content : 'Head Side Triangle Compression Bent Armlock from Leg Press  video and description' },
			],
		}
	}
}
</script>
