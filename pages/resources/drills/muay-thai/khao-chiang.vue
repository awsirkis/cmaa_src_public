<template>
  <div>
    
    <main>
      <mp4page TITLE="Khao Chiang" />
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
      title: 'Khao Chiang | CMAA',
      meta: [
        { name: 'description', content: 'Kata Khao Chiang video and description' },
        
      ],
    
    }
  }
}
</script>
