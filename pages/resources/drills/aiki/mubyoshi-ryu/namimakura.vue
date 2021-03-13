<template>
  <div>
    
    <main>
      <mp4page TITLE="Namimakura" />
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
      title: 'Namimakura | CMAA',
      meta: [
        { name: 'description', content: 'Kata Namimakura video and description' },
        
      ],
    
    }
  }
}
</script>
