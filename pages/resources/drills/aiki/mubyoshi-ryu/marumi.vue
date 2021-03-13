<template>
  <div>
    
    <main>
      <mp4page TITLE="Marumi" />
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
      title: 'Marumi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Marumi video and description' },
        
      ],
    
    }
  }
}
</script>
