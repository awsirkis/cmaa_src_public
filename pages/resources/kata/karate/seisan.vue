<template>
  <div>
    
    <main>
      <mp4page TITLE="Seisan" SRC="19DitlgcuwuNLrhnw78hAYhx18G9iUk5p"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 9)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Seisan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Seisan video and description' },
        
      ],
    
    }
  }
}
</script>
