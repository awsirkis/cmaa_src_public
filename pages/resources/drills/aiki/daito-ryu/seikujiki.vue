<template>
  <div>
    
    <main>
      <mp4page TITLE="Seikujiki" />
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
      title: 'Seikujiki | CMAA',
      meta: [
        { name: 'description', content: 'Kata Seikujiki video and description' },
        
      ],
    
    }
  }
}
</script>
