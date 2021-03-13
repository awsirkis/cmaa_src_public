<template>
  <div>
    
    <main>
      <mp4page TITLE="January 5, 2021 Youth" SRC="17o7H60eYsYvPlGvubci-OaCNKb1I7cqK"/>
      <mp4page TITLE="January 5, 2021 Adult" SRC="1xNBBxPF1RZNW1oPTPP5T0D0PON2VW5wz"/>
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
      title: '01/05/2021 | CMAA',
      meta: [
        { name: 'description', content: '01/05/2021 video and description' },
        
      ],
    
    }
  }
}
</script>
