<template>
  <div>
    <main>
      <article>
        <h1>Basics Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton SRC='osmkkf_logo.png' NAME="Kyu-rank Basics" LNK="/resources/drills/osmkkf/basics/kyu-rank" DESCRIPTION="" v-if="admin  || rank >=0 "/>
            <linkbutton SRC='osmkkf_logo.png' NAME="Blackbelt Basics" LNK="/resources/drills/osmkkf/basics/blackbelt" DESCRIPTION="" v-if="admin  || rank >=10 "/>
            <linkbutton SRC='osmkkf_logo.png' NAME="Bo Basics" LNK="/resources/drills/osmkkf/basics/bo" DESCRIPTION="" v-if="admin  || rank >=2 "/>
            <linkbutton SRC='osmkkf_logo.png' NAME="Sai Basics" LNK="/resources/drills/osmkkf/basics/sai" DESCRIPTION="" v-if="admin  || rank >=4 "/>
            <linkbutton SRC='osmkkf_logo.png' NAME="Kama Basics" LNK="/resources/drills/osmkkf/basics/kama" DESCRIPTION="" v-if="admin  || rank >=8 "/>
            <linkbutton SRC='osmkkf_logo.png' NAME="Tonfa Basics" LNK="/resources/drills/osmkkf/basics/tonfa" DESCRIPTION="" v-if="admin  || rank >=10 "/>
                
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
      title: 'Basics | CMAA',
      meta: [
        { name: 'description', content: 'OSMKKF Basics drills' },
        
      ],
    
    }
  }
}
</script>
