<template>
  <div>
    
    <main>
      <mp4page TITLE="Sankaku Jime" />
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
      title: 'Sankaku Jime | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sankaku Jime video and description' },
        
      ],
    
    }
  }
}
</script>
