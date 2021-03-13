<template>
  <div>
    
    <main>
      <mp4page SRC="1_YzOFZ9iWC5XnRMBRbm-rWcLauk-qXp4" TITLE="Chatan yara no Sai"  />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 10)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Chatan Yara no Sai | CMAA',
      meta: [
        { name: 'description', content: 'Kata Chatan Yara no Sai video and description' },
        
      ],
    
    }
  }
}
</script>
