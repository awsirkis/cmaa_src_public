<template>
  <div>
    
    <main>
      <mp4page TITLE="Bo tai Tonfa" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 12)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Bo tai Tonfa | CMAA',
      meta: [
        { name: 'description', content: 'Bo tai Tonfa and description' },
        
      ],
    
    }
  }
}
</script>


not auth or (not admin or sensei)
