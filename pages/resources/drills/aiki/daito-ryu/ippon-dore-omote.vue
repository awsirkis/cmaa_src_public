<template>
  <div>
    
    <main>
      <mp4page TITLE="Ippon Dori Omote" />
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
      title: 'Ippon Dori Omote | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ippon Dori Omote video and description' },
        
      ],
    
    }
  }
}
</script>
