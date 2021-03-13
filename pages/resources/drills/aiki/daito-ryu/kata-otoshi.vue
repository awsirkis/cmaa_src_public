<template>
  <div>
    
    <main>
      <mp4page TITLE="Kata Otoshi" />
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
      title: 'Kata Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kata Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
