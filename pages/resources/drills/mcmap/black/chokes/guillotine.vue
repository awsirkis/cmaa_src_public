<template>
	<div>
		<main>
			<mp4page TITLE="Guillotine Choke" />
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
			title: 'Guillotine Choke | CMAA',
			meta : [
				{ name: 'description', content : 'Guillotine Choke  video and description' },
			],
		}
	}
}
</script>
