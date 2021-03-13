<template>
  <div>
    
    <main>
      <mp4page SRC="1GUKdVKIPa44kEowAADwkFWhEi52ObIta" TITLE="Bo Yondan" />
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
      title: 'Bo Yondan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Bo Yondan video and description' },
        
      ],
    
    }
  }
}
</script>
