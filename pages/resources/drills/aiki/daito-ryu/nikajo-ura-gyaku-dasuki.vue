<template>
  <div>
    
    <main>
      <mp4page TITLE="Nikajo Ura Gyaku Dasuki" />
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
      title: 'Nikajo Ura Gyaku Dasuki | CMAA',
      meta: [
        { name: 'description', content: 'Kata Nikajo Ura Gyaku Dasuki video and description' },
        
      ],
    
    }
  }
}
</script>
