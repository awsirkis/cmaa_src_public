<template>
  <div>
    
    <main>
      <mp4page TITLE="Waki Dori" />
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
      title: 'Waki Dori | CMAA',
      meta: [
        { name: 'description', content: 'Kata Waki Dori video and description' },
        
      ],
    
    }
  }
}
</script>
