<template>
  <div>
    
    <main>
      <mp4page TITLE="Uchi Gote" />
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
      title: 'Uchi Gote | CMAA',
      meta: [
        { name: 'description', content: 'Kata Uchi Gote video and description' },
        
      ],
    
    }
  }
}
</script>
