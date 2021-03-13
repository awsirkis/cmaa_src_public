<template>
	<div>
		<main>
			<mp4page TITLE="Foot Prop to Belly-down Crossbody Armlock" />
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
			title: 'Foot Prop to Belly-down Crossbody Armlock | CMAA',
			meta : [
				{ name: 'description', content : 'Foot Prop to Belly-down Crossbody Armlock  video and description' },
			],
		}
	}
}
</script>
