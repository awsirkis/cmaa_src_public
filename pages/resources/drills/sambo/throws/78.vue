<template>
	<div>
		<main>
			<mp4page TITLE="Front Leg-lift Throw using Georgian Belt Grip" />
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
			title: 'Front Leg-lift Throw using Georgian Belt Grip | CMAA',
			meta : [
				{ name: 'description', content : 'Front Leg-lift Throw using Georgian Belt Grip  video and description' },
			],
		}
	}
}
</script>
