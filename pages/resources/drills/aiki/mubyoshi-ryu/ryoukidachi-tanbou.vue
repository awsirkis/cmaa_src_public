<template>
  <div>
    
    <main>
      <mp4page TITLE="Ryoukidachi Tanbou" />
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
      title: 'Ryoukidachi Tanbou | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ryoukidachi Tanbou video and description' },
        
      ],
    
    }
  }
}
</script>
