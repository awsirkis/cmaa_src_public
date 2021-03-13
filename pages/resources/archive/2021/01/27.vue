<template>
  <div>
    
    <main>
      <mp4page TITLE="January 27, 2021" SRC="1O4O70wCL70Z5ta7ZVYB9J6MSyl5rBfl_"/>
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
      title: '01/27/2021 | CMAA',
      meta: [
        { name: 'description', content: '01/27/2021 video and description' },
        
      ],
    
    }
  }
}
</script>
