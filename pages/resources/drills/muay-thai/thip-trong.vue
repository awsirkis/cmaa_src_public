<template>
  <div>
    
    <main>
      <mp4page TITLE="Thip Trong" />
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
      title: 'Thip Trong | CMAA',
      meta: [
        { name: 'description', content: 'Kata Thip Trong video and description' },
        
      ],
    
    }
  }
}
</script>
