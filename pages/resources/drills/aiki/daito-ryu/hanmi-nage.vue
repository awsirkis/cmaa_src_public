<template>
  <div>
    
    <main>
      <mp4page TITLE="Hanmi Nage" />
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
      title: 'Hanmi Nage | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hanmi Nage video and description' },
        
      ],
    
    }
  }
}
</script>
