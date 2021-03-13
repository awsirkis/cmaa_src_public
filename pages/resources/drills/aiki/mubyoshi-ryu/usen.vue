<template>
  <div>
    
    <main>
      <mp4page TITLE="Usen" />
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
      title: 'Usen | CMAA',
      meta: [
        { name: 'description', content: 'Kata Usen video and description' },
        
      ],
    
    }
  }
}
</script>
