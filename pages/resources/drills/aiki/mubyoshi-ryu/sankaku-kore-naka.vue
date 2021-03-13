<template>
  <div>
    
    <main>
      <mp4page TITLE="Sankaku Kore Naka" />
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
      title: 'Sankaku Kore Naka | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sankaku Kore Naka video and description' },
        
      ],
    
    }
  }
}
</script>
