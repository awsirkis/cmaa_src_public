<template>
	<div>
		<main>
			<mp4page TITLE="Leg Split/Body Drop Throw" />
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
			title: 'Leg Split/Body Drop Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Leg Split/Body Drop Throw  video and description' },
			],
		}
	}
}
</script>
