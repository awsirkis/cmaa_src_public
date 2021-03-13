<template>
  <div>
    
    <main>
      <mp4page TITLE="Kubi Hineri" />
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
      title: 'Kubi Hineri | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kubi Hineri video and description' },
        
      ],
    
    }
  }
}
</script>
