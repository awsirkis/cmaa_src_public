<template>
  <div>
    
    <main>
      <mp4page TITLE="Enpi" />
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
      title: 'Enpi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Enpi video and description' },
        
      ],
    
    }
  }
}
</script>
