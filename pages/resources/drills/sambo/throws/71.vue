<template>
	<div>
		<main>
			<mp4page TITLE="Sweeping Hip Throw with Georgian Belt Grip" />
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
			title: 'Sweeping Hip Throw with Georgian Belt Grip | CMAA',
			meta : [
				{ name: 'description', content : 'Sweeping Hip Throw with Georgian Belt Grip  video and description' },
			],
		}
	}
}
</script>
