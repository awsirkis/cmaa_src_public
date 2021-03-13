<template>
  <div>
    
    <main>
      <mp4page TITLE="Gyaku Juji Jime" />
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
      title: 'Gyaku Juji Jime | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gyaku Juji Jime video and description' },
        
      ],
    
    }
  }
}
</script>
