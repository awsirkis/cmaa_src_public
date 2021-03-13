<template>
  <div>
    
    <main>
      <mp4page TITLE="Osoto Guruma" />
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
      title: 'Osoto Guruma | CMAA',
      meta: [
        { name: 'description', content: 'Kata Osoto Guruma video and description' },
        
      ],
    
    }
  }
}
</script>
