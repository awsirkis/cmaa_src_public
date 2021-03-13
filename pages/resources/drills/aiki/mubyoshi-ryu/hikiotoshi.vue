<template>
  <div>
    
    <main>
      <mp4page TITLE="Hikiotoshi" />
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
      title: 'Hikiotoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hikiotoshi video and description' },
        
      ],
    
    }
  }
}
</script>
