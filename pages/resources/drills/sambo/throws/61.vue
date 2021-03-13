<template>
	<div>
		<main>
			<mp4page TITLE="Knee Drop Both Hands Back Carry Throw" />
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
			title: 'Knee Drop Both Hands Back Carry Throw | CMAA',
			meta : [
				{ name: 'description', content : 'Knee Drop Both Hands Back Carry Throw  video and description' },
			],
		}
	}
}
</script>
