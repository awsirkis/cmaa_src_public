<template>
  <div>
    
    <main>
      <mp4page TITLE="Pin'an Sandan" SRC="1flJdgHDHuiYQIAAwIjleUJNQNpcAht_K"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 6)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Pin\'an Sandan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Pin\'an Sandan video and description' },
        
      ],
    
    }
  }
}
</script>
