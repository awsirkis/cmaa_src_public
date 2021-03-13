<template>
  <div>
    
    <main>
      <mp4page TITLE="Kasumigiri" />
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
      title: 'Kasumigiri | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kasumigiri video and description' },
        
      ],
    
    }
  }
}
</script>
