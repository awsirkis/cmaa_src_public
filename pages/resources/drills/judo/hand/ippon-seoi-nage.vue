<template>
  <div>
    
    <main>
      <mp4page TITLE="Ippon Seoi Nage" />
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
      title: 'Ippon Seoi Nage | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ippon Seoi Nage video and description' },
        
      ],
    
    }
  }
}
</script>
