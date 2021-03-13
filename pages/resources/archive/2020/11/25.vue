<template>
  <div>
    
    <main>
      <mp4page TITLE="November 25, 2020" SRC="12VzYz7QBxZBNf5_qS9D_p5TpqF5_pez-"/>
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
      title: '11/25/2020 | CMAA',
      meta: [
        { name: 'description', content: '11/25/2020 video and description' },
        
      ],
    
    }
  }
}
</script>
