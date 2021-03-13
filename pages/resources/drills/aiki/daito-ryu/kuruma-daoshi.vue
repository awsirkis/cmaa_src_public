<template>
  <div>
    
    <main>
      <mp4page TITLE="Kuruma Daoshi" />
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
      title: 'Kuruma Daoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kuruma Daoshi video and description' },
        
      ],
    
    }
  }
}
</script>
