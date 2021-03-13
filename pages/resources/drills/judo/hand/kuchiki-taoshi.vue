<template>
  <div>
    
    <main>
      <mp4page TITLE="Kuchiki Taoshi" />
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
      title: 'Kuchiki Taoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kuchiki Taoshi video and description' },
        
      ],
    
    }
  }
}
</script>
