<template>
  <div>
    
    <main>
      <mp4page TITLE="Hiki Otoshi" />
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
      title: 'Hiki Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hiki Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
