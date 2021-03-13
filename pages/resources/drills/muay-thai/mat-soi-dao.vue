<template>
  <div>
    
    <main>
      <mp4page TITLE="Mat Soi Dao" />
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
      title: 'Mat Soi Dao | CMAA',
      meta: [
        { name: 'description', content: 'Kata Mat Soi Dao video and description' },
        
      ],
    
    }
  }
}
</script>
