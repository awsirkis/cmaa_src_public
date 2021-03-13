<template>
  <div>
    
    <main>
      <mp4page TITLE="Sok Ti" />
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
      title: 'Sok Ti | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sok Ti video and description' },
        
      ],
    
    }
  }
}
</script>
