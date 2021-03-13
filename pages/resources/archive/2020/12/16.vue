<template>
  <div>
    
    <main>
      <mp4page TITLE="December 16, 2020" SRC="1y_0sOlHg8JM1evo8nQegukF7Ql2WtASE"/>
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
      title: '12/16/2020 | CMAA',
      meta: [
        { name: 'description', content: '12/16/2020 video and description' },
        
      ],
    
    }
  }
}
</script>
