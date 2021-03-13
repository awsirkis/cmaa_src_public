<template>
  <div>
    
    <main>
      <mp4page TITLE="Kakae Kubi" />
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
      title: 'Kakae Kubi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kakae Kubi video and description' },
        
      ],
    
    }
  }
}
</script>
