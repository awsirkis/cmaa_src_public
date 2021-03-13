<template>
  <div>
    
    <main>
      <mp4page TITLE="Kumotsuke" />
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
      title: 'Kumotsuke | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kumotsuke video and description' },
        
      ],
    
    }
  }
}
</script>
