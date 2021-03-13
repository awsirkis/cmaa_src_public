<template>
  <div>
    
    <main>
      <mp4page TITLE="2nd Kyu Tuite"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 8)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: '2nd Kyu Tuite | CMAA',
      meta: [
        { name: 'description', content: '2nd Kyu Tuite video and description' },
        
      ],
    
    }
  }
}
</script>
