<template>
  <div>
    
    <main>
      <mp4page TITLE="Fukyu Kata Ni" SRC="1bXOj3_30viR73kIB_z-_1SlkzB1hRZTH"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 1)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Fukyu Kata Ni | CMAA',
      meta: [
        { name: 'description', content: 'Kata Fukyu Kata Ni video and description' },
        
      ],
    
    }
  }
}
</script>
