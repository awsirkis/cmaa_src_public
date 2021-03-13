<template>
  <div>
    
    <main>
      <mp4page TITLE="Hane Goshi" />
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
      title: 'Hane Goshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hane Goshi video and description' },
        
      ],
    
    }
  }
}
</script>
