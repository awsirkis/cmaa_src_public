<template>
  <div>
    
    <main>
      <mp4page TITLE="Passai Sho" SRC="1Y8f0bXeJPL7QUQb4NEn-TyICE1qfA0o2"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 10)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Passai Sho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Passai Sho video and description' },
        
      ],
    
    }
  }
}
</script>
