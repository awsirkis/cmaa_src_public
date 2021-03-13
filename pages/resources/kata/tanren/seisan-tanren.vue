<template>
  <div>
    
    <main>
      <mp4page TITLE="Seisan Tan Ren" SRC="1W4M5aGttXq8NIg0HQvjdqRS0AB-KM81q"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 9)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Seisan Tan Ren | CMAA',
      meta: [
        { name: 'description', content: 'Kata Seisan Tan Ren video and description' },
        
      ],
    
    }
  }
}
</script>
