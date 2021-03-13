<template>
  <div>
    
    <main>
      <mp4page TITLE="Uki Gatame" />
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
      title: 'Uki Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Uki Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
