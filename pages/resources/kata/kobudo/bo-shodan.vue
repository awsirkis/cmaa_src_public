<template>
  <div>
    
    <main>
      <mp4page SRC="1a9oGq6ArlcsljlAN06xPS7JDbp7EVrCA" TITLE="Bo Shodan" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 3)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Bo Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Bo Shodan video and description' },
        
      ],
    
    }
  }
}
</script>
