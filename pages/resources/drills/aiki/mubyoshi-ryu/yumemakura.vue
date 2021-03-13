<template>
  <div>
    
    <main>
      <mp4page TITLE="Yumemakura" />
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
      title: 'Yumemakura | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yumemakura video and description' },
        
      ],
    
    }
  }
}
</script>
