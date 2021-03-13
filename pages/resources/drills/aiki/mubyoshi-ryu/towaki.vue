<template>
  <div>
    
    <main>
      <mp4page TITLE="Towaki" />
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
      title: 'Towaki | CMAA',
      meta: [
        { name: 'description', content: 'Kata Towaki video and description' },
        
      ],
    
    }
  }
}
</script>
