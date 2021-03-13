<template>
  <div>
    
    <main>
      <mp4page TITLE="Yuuhikigaeshi" />
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
      title: 'Yuuhikigaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yuuhikigaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
