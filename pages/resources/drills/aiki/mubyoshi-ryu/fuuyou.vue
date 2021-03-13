<template>
  <div>
    
    <main>
      <mp4page TITLE="Fuuyou" />
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
      title: 'Fuuyou | CMAA',
      meta: [
        { name: 'description', content: 'Kata Fuuyou video and description' },
        
      ],
    
    }
  }
}
</script>
