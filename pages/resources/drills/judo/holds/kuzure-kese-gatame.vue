<template>
  <div>
    
    <main>
      <mp4page TITLE="Kuzure Kese Gatame" />
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
      title: 'Kuzure Kese Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kuzure Kese Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
