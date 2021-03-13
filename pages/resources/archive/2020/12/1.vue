<template>
  <div>
    
    <main>
      <mp4page TITLE="December 1, 2020" SRC="12kthwahJy_d4E4pMGIOZia0zods9eOxz"/>
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
