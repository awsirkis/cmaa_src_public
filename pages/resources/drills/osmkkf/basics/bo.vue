<template>
  <div>
    
    <main>
      <mp4page TITLE="Bo Basics" />
    </main>
    <article>
        <h1>Ordered List of Basics</h1>
        <ol>
          <li>Overhead Strike</li>
          <li>Side Strike</li>
          <li>Downblock</li>
          <li>Horizontal Block</li>
          <li>Vertical Block</li>
          <li>Middle Jab</li>
          <li>Curl, High Jab</li>
          <li>Forward Curl, High Jab (On the Shoulder)</li>
          <li>Double Ovehread Strike</li>
          <li>Double Uppercut Strike</li>
          <li>Double Horizontal Strike</li>
          <li>Figure-8 Spin</li>
          <li>Bo Shodan Ending Move</li>
          <li>Downblock, Overhead Strike</li>
          <li>High Block</li>
          <li>Curl, Extended Jab (Pool Cue Strike)</li>
        </ol>
      </article>
  </div>
</template>

<script>
import mp4page from '~/components/mp4page'
export default {
    
  components: {
    mp4page
  },
  mounted(){
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 2)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Bo Basics | CMAA',
      meta: [
        { name: 'description', content: 'Bo Basics video and description' },
        
      ],
    
    }
  }
}
</script>
