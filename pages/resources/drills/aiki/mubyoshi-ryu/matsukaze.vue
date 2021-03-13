<template>
  <div>
    
    <main>
      <mp4page TITLE="Matsukaze" />
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
      title: 'Matsukaze | CMAA',
      meta: [
        { name: 'description', content: 'Kata Matsukaze video and description' },
        
      ],
    
    }
  }
}
</script>
