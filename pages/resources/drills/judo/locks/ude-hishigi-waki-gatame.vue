<template>
  <div>
    
    <main>
      <mp4page TITLE="Ude Hishigi Waki Gatame" />
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
      title: 'Ude Hishigi Waki Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ude Hishigi Waki Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
