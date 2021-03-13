<template>
	<div>
		<main>
			<mp4page TITLE="Pretzel Compression Bent Armlock" />
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
			title: 'Pretzel Compression Bent Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Pretzel Compression Bent Armlock  video and description' },
			],
		}
	}
}
</script>
