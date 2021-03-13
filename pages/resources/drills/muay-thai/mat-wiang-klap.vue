<template>
  <div>
    
    <main>
      <mp4page TITLE="Mat Wiang Klap" />
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
      title: 'Mat Wiang Klap | CMAA',
      meta: [
        { name: 'description', content: 'Kata Mat Wiang Klap video and description' },
        
      ],
    
    }
  }
}
</script>
