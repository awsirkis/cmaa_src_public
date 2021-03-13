<template>
  <div>
    
    <main>
      <mp4page TITLE="Migikiri Hidarikiri" />
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
      title: 'Migikiri Hidarikiri | CMAA',
      meta: [
        { name: 'description', content: 'Kata Migikiri Hidarikiri video and description' },
        
      ],
    
    }
  }
}
</script>
