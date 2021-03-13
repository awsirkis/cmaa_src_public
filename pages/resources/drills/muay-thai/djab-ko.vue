<template>
  <div>
    
    <main>
      <mp4page TITLE="Djab Ko" />
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
      title: 'Djab Ko | CMAA',
      meta: [
        { name: 'description', content: 'Kata Djab Ko video and description' },
        
      ],
    
    }
  }
}
</script>
