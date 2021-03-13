<template>
  <div>
    
    <main>
      <mp4page SRC="1QvqfHLyoqPCD_X_N-AI0KYUx1oV_tyrj" TITLE="Kanegawa no Timbe" />
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
      title: 'Kanegawa no Timbe | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kanegawa no Timbe video and description' },
        
      ],
    
    }
  }
}
</script>
