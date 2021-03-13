<template>
  <div>
    
    <main>
      <mp4page TITLE="Mat Wiang Yao" />
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
      title: 'Mat Wiang Yao | CMAA',
      meta: [
        { name: 'description', content: 'Kata Mat Wiang Yao video and description' },
        
      ],
    
    }
  }
}
</script>
