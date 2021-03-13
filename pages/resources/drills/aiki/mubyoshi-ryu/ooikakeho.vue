<template>
  <div>
    
    <main>
      <mp4page TITLE="Ooikakeho" />
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
      title: 'Ooikakeho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ooikakeho video and description' },
        
      ],
    
    }
  }
}
</script>
