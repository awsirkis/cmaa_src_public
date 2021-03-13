<template>
  <div>
    
    <main>
      <mp4page TITLE="Kohou" />
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
      title: 'Kohou | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kohou video and description' },
        
      ],
    
    }
  }
}
</script>
