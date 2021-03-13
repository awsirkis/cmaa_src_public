<template>
  <div>
    
    <main>
      <mp4page TITLE="Omomi" />
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
      title: 'Omomi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Omomi video and description' },
        
      ],
    
    }
  }
}
</script>
