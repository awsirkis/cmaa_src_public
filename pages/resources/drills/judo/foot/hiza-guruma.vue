<template>
  <div>
    
    <main>
      <mp4page TITLE="Hiza Guruma" />
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
      title: 'Hiza Guruma | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hiza Guruma video and description' },
        
      ],
    
    }
  }
}
</script>
