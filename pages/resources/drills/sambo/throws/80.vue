<template>
	<div>
		<main>
			<mp4page TITLE="Foot Prop Throw w/ Geogian Belt Grip" />
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
			title: 'Foot Prop Throw w/ Geogian Belt Grip | CMAA',
			meta : [
				{ name: 'description', content : 'Foot Prop Throw w/ Geogian Belt Grip  video and description' },
			],
		}
	}
}
</script>
