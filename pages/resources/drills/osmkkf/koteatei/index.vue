<template>
  <div>
    
    <main>
      <article>
        <h1>Koteatei Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton SRC='osmkkf_logo.png' NAME="Set #1 " LNK="/resources/drills/osmkkf/koteatei/1" DESCRIPTION="" v-if="admin  || rank >=1 "/>
            <linkbutton SRC='osmkkf_logo.png' NAME="Set #2 " LNK="/resources/drills/osmkkf/koteatei/2" DESCRIPTION="" v-if="admin  || rank >=5 "/>
            <linkbutton SRC='osmkkf_logo.png' NAME="Set #3 " LNK="/resources/drills/osmkkf/koteatei/3" DESCRIPTION="" v-if="admin  || rank >=8 "/>
         </div>
        </div>
    </main>
    
  </div>
</template>

<script>import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  data(){
    return{
      rank: 0,
      admin: false,
      sensei: false
    }
  },
  mounted(){
    if(this.$store.state.user == undefined){
      this.$router.push('/')
    }
    this.rank = this.$store.getters.rankKarate.length
    this.admin = this.$store.getters.role >= 4
  },
  head () {
    return {
      title: 'Koteatei | CMAA',
      meta: [
        { name: 'description', content: 'OSMKKF Koteatei drills' },
        
      ],
    
    }
  }
}
</script>
