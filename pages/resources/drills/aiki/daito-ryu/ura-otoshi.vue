<template>
  <div>
    
    <main>
      <mp4page TITLE="Ura Otoshi" />
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
      title: 'Ura Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ura Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
