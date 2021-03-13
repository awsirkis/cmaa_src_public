<template>
  <div>
    
    <main>
      <mp4page TITLE="Tsuken Sunakake no Kon" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 15)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Tsuken Sunakake no Kon | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tsuken Sunakake no Kon video and description' },
        
      ],
    
    }
  }
}
</script>
