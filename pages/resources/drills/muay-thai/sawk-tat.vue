<template>
  <div>
    
    <main>
      <mp4page TITLE="Sawk Tat" />
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
      title: 'Sawk Tat | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sawk Tat video and description' },
        
      ],
    
    }
  }
}
</script>
