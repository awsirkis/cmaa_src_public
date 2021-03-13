<template>
  <div>
    
    <main>
      <mp4page TITLE="Musubiito" />
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
      title: 'Musubiito | CMAA',
      meta: [
        { name: 'description', content: 'Kata Musubiito video and description' },
        
      ],
    
    }
  }
}
</script>
