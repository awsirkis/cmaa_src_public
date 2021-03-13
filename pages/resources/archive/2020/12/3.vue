<template>
  <div>
    
    <main>
      <mp4page TITLE="December 3, 2020" SRC="1KH_EtTwCwtocJg9N74aFImjvARVbu2Li"/>
      
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
      title: '12/3/2020 | CMAA',
      meta: [
        { name: 'description', content: '12/3/2020 video and description' },
        
      ],
    
    }
  }
}
</script>
