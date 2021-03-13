<template>
  <div>
    
    <main>
      <mp4page TITLE="Kubi Juji Shime - Aiki Nage" />
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
      title: 'Kubi Juji Shime - Aiki Nage | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kubi Juji Shime - Aiki Nage video and description' },
        
      ],
    
    }
  }
}
</script>
