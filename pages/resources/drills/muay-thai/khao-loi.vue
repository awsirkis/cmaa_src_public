<template>
  <div>
    
    <main>
      <mp4page TITLE="Khao Loi" />
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
      title: 'Khao Loi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Khao Loi video and description' },
        
      ],
    
    }
  }
}
</script>
