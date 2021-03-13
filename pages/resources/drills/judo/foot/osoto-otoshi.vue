<template>
  <div>
    
    <main>
      <mp4page TITLE="Osoto Otoshi" />
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
      title: 'Osoto Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Osoto Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
