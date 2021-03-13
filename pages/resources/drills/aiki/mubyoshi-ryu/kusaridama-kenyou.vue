<template>
  <div>
    
    <main>
      <mp4page TITLE="Kusaridama Kenyou" />
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
      title: 'Kusaridama Kenyou | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kusaridama Kenyou video and description' },
        
      ],
    
    }
  }
}
</script>
