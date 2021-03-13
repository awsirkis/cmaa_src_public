<template>
  <div>
    
    <main>
      <mp4page TITLE="Hisshi Sandan Chuu" />
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
      title: 'Hisshi Sandan Chuu | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hisshi Sandan Chuu video and description' },
        
      ],
    
    }
  }
}
</script>
