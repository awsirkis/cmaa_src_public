<template>
  <div>
    
    <main>
      <mp4page TITLE="Te Tat" />
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
      title: 'Te Tat | CMAA',
      meta: [
        { name: 'description', content: 'Kata Te Tat video and description' },
        
      ],
    
    }
  }
}
</script>
