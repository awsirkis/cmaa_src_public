<template>
  <div>
    
    <main>
      <mp4page TITLE="Tai Otoshi" />
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
      title: 'Tai Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tai Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
