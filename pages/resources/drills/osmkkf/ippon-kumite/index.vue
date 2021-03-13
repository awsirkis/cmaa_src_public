<template>
  <div>
    
    <main>
      <article>
        <h1>Ippon Kumite Drills</h1>
      </article>
      <h3>Karate</h3>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='drills/thumbnails/wb-ippon-kumite.png' NAME="White-belt One Steps" LNK="/resources/drills/osmkkf/ippon-kumite/white-belt-ippon-kumite" DESCRIPTION="" v-if="admin  || rank >=0 "/>
              <linkbutton SRC='drills/thumbnails/blb-ippon-kumite.png' NAME="Blue-belt One Steps" LNK="/resources/drills/osmkkf/ippon-kumite/blue-belt-ippon-kumite" DESCRIPTION="" v-if="admin  || rank >=1 "/>
              <linkbutton SRC='drills/thumbnails/gb-ippon-kumite.png' NAME="Green-belt One Steps" LNK="/resources/drills/osmkkf/ippon-kumite/green-belt-ippon-kumite" DESCRIPTION="" v-if="admin  || rank >=4 "/>
              <linkbutton SRC='drills/thumbnails/brb-ippon-kumite.png' NAME="Brown-belt One Steps" LNK="/resources/drills/osmkkf/ippon-kumite/brown-belt-ippon-kumite" DESCRIPTION="" v-if="admin  || rank >=7 "/>
              <linkbutton SRC='drills/thumbnails/bcb-ippon-kumite.png' NAME="Black-belt One Steps" LNK="/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite" DESCRIPTION="" v-if="admin  || rank >=10 "/>
          </div>
        </div>
        <h3>Kobudo</h3>
        <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='drills/thumbnails/bo-tai-bo.png' NAME="Bo tai Bo Set #1" LNK="/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-1" DESCRIPTION="" v-if="admin  || rank >=0 "/>
              <linkbutton SRC='drills/thumbnails/bo-tai-bo-2.png' NAME="Bo tai Bo Set #2" LNK="/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-2" DESCRIPTION="" v-if="admin  || rank >=3 "/>
              <linkbutton SRC='drills/thumbnails/bo-tai-bo-3.png' NAME="Bo tai Bo Set #3" LNK="/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-3" DESCRIPTION="" v-if="admin  || rank >=7 "/>
              <linkbutton SRC='drills/thumbnails/bo-tai-sai.png' NAME="Bo tai Sai" LNK="/resources/drills/osmkkf/ippon-kumite/bo-tai-sai" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='drills/thumbnails/bo-tai-kama.png' NAME="Bo tai Kama" LNK="/resources/drills/osmkkf/ippon-kumite/bo-tai-kama" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='drills/thumbnails/bo-tai-tonfa.png' NAME="Bo tai Tonfa" LNK="/resources/drills/osmkkf/ippon-kumite/bo-tai-tonfa" DESCRIPTION="" v-if="admin  || rank >=10 "/>
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
      title: 'Ippon Kumite | CMAA',
      meta: [
        { name: 'description', content: 'OSMKKF Ippon Kumite drills' },
        
      ],
    
    }
  }
}
</script>
