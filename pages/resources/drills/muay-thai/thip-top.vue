<template>
  <div>
    
    <main>
      <mp4page TITLE="Thip Top" />
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
      title: 'Thip Top | CMAA',
      meta: [
        { name: 'description', content: 'Kata Thip Top video and description' },
        
      ],
    
    }
  }
}
</script>
