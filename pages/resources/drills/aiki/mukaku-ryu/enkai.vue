<template>
  <div>
    
    <main>
      <mp4page TITLE="Enkai" />
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
      title: 'Enkai | CMAA',
      meta: [
        { name: 'description', content: 'Kata Enkai video and description' },
        
      ],
    
    }
  }
}
</script>
