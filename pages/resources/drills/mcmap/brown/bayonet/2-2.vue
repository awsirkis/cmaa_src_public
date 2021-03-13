<template>
	<div>
		<main>
			<mp4page TITLE="2-on-2 Bayonet Fighting" />
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
			title: '2-on-2 Bayonet Fighting | CMAA',
			meta : [
				{ name: 'description', content : '2-on-2 Bayonet Fighting  video and description' },
			],
		}
	}
}
</script>
