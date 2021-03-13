<template>
  <div>
    
    <main>
      <mp4page TITLE="Mat Wiang San" />
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
      title: 'Mat Wiang San | CMAA',
      meta: [
        { name: 'description', content: 'Kata Mat Wiang San video and description' },
        
      ],
    
    }
  }
}
</script>
