<template>
  <div>
    
    <main>
      <mp4page TITLE="Hanaremi" />
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
      title: 'Hanaremi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hanaremi video and description' },
        
      ],
    
    }
  }
}
</script>
