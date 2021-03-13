<template>
  <div>
    
    <main>
      <mp4page TITLE="Gansekiotoshi" />
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
      title: 'Gansekiotoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gansekiotoshi video and description' },
        
      ],
    
    }
  }
}
</script>
