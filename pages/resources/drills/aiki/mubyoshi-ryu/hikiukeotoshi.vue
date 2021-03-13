<template>
  <div>
    
    <main>
      <mp4page TITLE="Hikiukiotoshi" />
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
      title: 'Hikiukiotoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hikiukiotoshi video and description' },
        
      ],
    
    }
  }
}
</script>
