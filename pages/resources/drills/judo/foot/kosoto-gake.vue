<template>
  <div>
    
    <main>
      <mp4page TITLE="Kosoto Gake" />
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
      title: 'Kosoto Gake | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kosoto Gake video and description' },
        
      ],
    
    }
  }
}
</script>
