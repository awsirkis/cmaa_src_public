<template>
	<div>
		<main>
			<mp4page TITLE="Bayonet Rush" />
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
			title: 'Bayonet Rush | CMAA',
			meta : [
				{ name: 'description', content : 'Bayonet Rush  video and description' },
			],
		}
	}
}
</script>
