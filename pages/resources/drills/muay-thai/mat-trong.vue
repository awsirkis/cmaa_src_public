<template>
  <div>
    
    <main>
      <mp4page TITLE="Mat Trong" />
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
      title: 'Mat Trong | CMAA',
      meta: [
        { name: 'description', content: 'Kata Mat Trong video and description' },
        
      ],
    
    }
  }
}
</script>
