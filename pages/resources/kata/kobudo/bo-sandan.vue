<template>
  <div>
    
    <main>
      <mp4page SRC="1GR12go3LpsVam-sbqgKznKv8aPQ3joVs" TITLE="Bo Sandan" />
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
      title: 'Bo Sandan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Bo Sandan video and description' },
        
      ],
    
    }
  }
}
</script>
