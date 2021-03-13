<template>
  <div>
    
    <main>
      <mp4page TITLE="Yoko Otoshi" />
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
      title: 'Yoko Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yoko Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
