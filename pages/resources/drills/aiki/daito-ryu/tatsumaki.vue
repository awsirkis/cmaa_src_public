<template>
  <div>
    
    <main>
      <mp4page TITLE="Tatsumaki" />
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
      title: 'Tatsumaki | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tatsumaki video and description' },
        
      ],
    
    }
  }
}
</script>
