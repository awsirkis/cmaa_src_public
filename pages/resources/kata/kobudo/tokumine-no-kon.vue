<template>
  <div>
    
    <main>
      <mp4page SRC="1pYCqHmuZsM3VDBF6fVMGLIobQLGlr9Wf"  TITLE="Tokumine no Kon" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 11)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Tokumine no Kon | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tokumine no Kon video and description' },
        
      ],
    
    }
  }
}
</script>
