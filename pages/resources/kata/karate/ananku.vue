<template>
  <div>
    
    <main>
      <mp4page TITLE="Ananku" SRC="1F8PEge-iz7sW6Gh1GozFda293mblZxXj"/>
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
      title: 'Ananku | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ananku video and description' },
        
      ],
    
    }
  }
}
</script>
