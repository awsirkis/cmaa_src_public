<template>
  <div>
    
    <main>
      <mp4page TITLE="Harai Tsurikomi Ashi" />
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
      title: 'Harai Tsurikomi Ashi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Harai Tsurikomi Ashi video and description' },
        
      ],
    
    }
  }
}
</script>
