<template>
  <div>
    
    <main>
      <mp4page TITLE="O Guruma" />
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
      title: 'O Guruma | CMAA',
      meta: [
        { name: 'description', content: 'Kata O Guruma video and description' },
        
      ],
    
    }
  }
}
</script>
