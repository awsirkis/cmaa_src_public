<template>
  <div>
    
    <main>
      <mp4page TITLE="Hiji Kujiki" />
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
      title: 'Hiji Kujiki | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hiji Kujiki video and description' },
        
      ],
    
    }
  }
}
</script>
