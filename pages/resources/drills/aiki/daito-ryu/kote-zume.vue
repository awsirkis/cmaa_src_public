<template>
  <div>
    
    <main>
      <mp4page TITLE="Kote Zume" />
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
      title: 'Kote Zume | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kote Zume video and description' },
        
      ],
    
    }
  }
}
</script>
