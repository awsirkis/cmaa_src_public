<template>
	<div>
		<main>
			<mp4page TITLE="Two-on-One Wrist Trap Breakdown" />
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
			title: 'Two-on-One Wrist Trap Breakdown | CMAA',
			meta : [
				{ name: 'description', content : 'Two-on-One Wrist Trap Breakdown  video and description' },
			],
		}
	}
}
</script>
