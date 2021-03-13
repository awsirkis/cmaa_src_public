<template>
  <div>
    
    <main>
      <mp4page TITLE="Chisai Choutan" />
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
      title: 'Chisai Choutan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Chisai Choutan video and description' },
        
      ],
    
    }
  }
}
</script>
