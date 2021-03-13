<template>
  <div>
    
    <main>
      <mp4page TITLE="Seikiken" />
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
      title: 'Seikiken | CMAA',
      meta: [
        { name: 'description', content: 'Kata Seikiken video and description' },
        
      ],
    
    }
  }
}
</script>
