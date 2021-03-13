<template>
  <div>
    
    <main>
      <mp4page TITLE="Simoku" />
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
      title: 'Simoku | CMAA',
      meta: [
        { name: 'description', content: 'Kata Simoku video and description' },
        
      ],
    
    }
  }
}
</script>
