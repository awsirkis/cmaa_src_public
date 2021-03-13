<template>
  <div>
    
    <main>
      <mp4page TITLE="Uki Otoshi" />
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
      title: 'Uki Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Uki Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
