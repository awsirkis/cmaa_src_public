<template>
	<div>
		<main>
			<mp4page TITLE="Inner Thigh Throw (Hip Style)" />
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
			title: 'Inner Thigh Throw (Hip Style) | CMAA',
			meta : [
				{ name: 'description', content : 'Inner Thigh Throw (Hip Style)  video and description' },
			],
		}
	}
}
</script>
