<template>
  <div>
    
    <main>
      <mp4page TITLE="Yoko Wakare" />
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
      title: 'Yoko Wakare | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yoko Wakare video and description' },
        
      ],
    
    }
  }
}
</script>
