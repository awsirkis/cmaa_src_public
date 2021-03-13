<template>
  <div>
    
    <main>
      <mp4page TITLE="Te Klap Lang" />
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
      title: 'Te Klap Lang | CMAA',
      meta: [
        { name: 'description', content: 'Kata Te Klap Lang video and description' },
        
      ],
    
    }
  }
}
</script>
