<template>
  <div>
    
    <main>
      <mp4page TITLE="Seoi Otoshi" />
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
      title: 'Seoi Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Seoi Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
