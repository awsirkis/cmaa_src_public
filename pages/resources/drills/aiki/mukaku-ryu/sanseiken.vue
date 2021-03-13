<template>
  <div>
    
    <main>
      <mp4page TITLE="Sanseiken" />
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
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Sanseiken | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sanseiken video and description' },
        
      ],
    
    }
  }
}
</script>
