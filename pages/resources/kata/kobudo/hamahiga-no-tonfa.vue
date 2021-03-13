<template>
  <div>
    
    <main>
      <mp4page SRC="1KWZelLNRvfLkLSi0uF6EitSrGFlLozMP" TITLE="Hamahiga no Tonfa"/>
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
      title: 'Hamahiga no Tonfa | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hamahiga no Tonfa video and description' },
        
      ],
    
    }
  }
}
</script>
