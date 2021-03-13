<template>
  <div>
    
    <main>
      <mp4page TITLE="Sode Tsurikomi Goshi" />
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
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Sode Tsurikomi Goshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sode Tsurikomi Goshi video and description' },
        
      ],
    
    }
  }
}
</script>
