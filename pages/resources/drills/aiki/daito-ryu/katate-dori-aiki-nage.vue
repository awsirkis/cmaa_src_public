<template>
  <div>
    
    <main>
      <mp4page TITLE="Katate Dori - Aiki Nage" />
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
      title: 'Katate Dori - Aiki Nage | CMAA',
      meta: [
        { name: 'description', content: 'Kata Katate Dori - Aiki Nage video and description' },
        
      ],
    
    }
  }
}
</script>
