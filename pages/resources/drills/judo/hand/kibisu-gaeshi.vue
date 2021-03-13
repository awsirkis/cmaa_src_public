<template>
  <div>
    
    <main>
      <mp4page TITLE="Kibisu Gaeshi" />
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
      title: 'Kibisu Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kibisu Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
