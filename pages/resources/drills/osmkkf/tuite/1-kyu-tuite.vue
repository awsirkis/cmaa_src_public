<template>
  <div>
    
    <main>
      <mp4page TITLE="1st Kyu Tuite"/>
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
      title: '1st Kyu Tuite | CMAA',
      meta: [
        { name: 'description', content: '1st Kyu Tuite video and description' },
        
      ],
    
    }
  }
}
</script>
