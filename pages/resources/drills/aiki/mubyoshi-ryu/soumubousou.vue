<template>
  <div>
    
    <main>
      <mp4page TITLE="Soumubousou" />
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
      title: 'Soumubousou | CMAA',
      meta: [
        { name: 'description', content: 'Kata Soumubousou video and description' },
        
      ],
    
    }
  }
}
</script>
