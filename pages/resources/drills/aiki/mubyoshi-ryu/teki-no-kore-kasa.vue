<template>
  <div>
    
    <main>
      <mp4page TITLE="Teki no Kore Kasa" />
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
      title: 'Teki no Kore Kasa | CMAA',
      meta: [
        { name: 'description', content: 'Kata Teki no Kore Kasa video and description' },
        
      ],
    
    }
  }
}
</script>
