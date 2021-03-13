<template>
  <div>
    
    <main>
      <mp4page TITLE="Bichuuken" />
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
      title: 'Bichuuken | CMAA',
      meta: [
        { name: 'description', content: 'Kata Bichuuken video and description' },
        
      ],
    
    }
  }
}
</script>
