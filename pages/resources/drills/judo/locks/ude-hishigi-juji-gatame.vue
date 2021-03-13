<template>
  <div>
    
    <main>
      <mp4page TITLE="Ude Hishigi Juji Gatame" />
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
      title: 'Ude Hishigi Juji Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ude Hishigi Juji Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
