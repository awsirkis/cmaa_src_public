<template>
  <div>
    
    <main>
      <article>
        <h1>Tuite Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='drills/thumbnails/10-k-tuite.png' NAME="10th Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/10-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=0 "/>
              <linkbutton SRC='drills/thumbnails/9-k-tuite.png' NAME="9th Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/9-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=1 "/>
              <linkbutton SRC='drills/thumbnails/8-k-tuite.png' NAME="8th Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/8-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=2 "/>
              <linkbutton SRC='drills/thumbnails/7-k-tuite.png' NAME="7th Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/7-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=3 "/>
              <linkbutton SRC='drills/thumbnails/6-k-tuite.png' NAME="6th Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/6-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=4 "/>
              <linkbutton SRC='drills/thumbnails/5-k-tuite.png' NAME="5th Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/5-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=5 "/>
              <linkbutton SRC='drills/thumbnails/4-k-tuite.png' NAME="4th Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/4-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=6 "/>
              <linkbutton SRC='drills/thumbnails/3-k-tuite.png' NAME="3rd Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/3-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=7 "/>
              <linkbutton SRC='drills/thumbnails/2-k-tuite.png' NAME="2nd Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/2-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=8 "/>
              <linkbutton SRC='drills/thumbnails/1-k-tuite.png' NAME="1st Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/1-kyu-tuite" DESCRIPTION="" v-if="admin  || rank >=9 "/>
              <linkbutton SRC='drills/thumbnails/1-d-tuite.png' NAME="1st Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/1-dan-tuite" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='drills/thumbnails/2-d-tuite.png' NAME="2nd Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/2-dan-tuite" DESCRIPTION="" v-if="admin  || rank >=11 "/>
              <linkbutton SRC='drills/thumbnails/3-d-tuite.png' NAME="3rd Kyu Tuite" LNK="/resources/drills/osmkkf/tuite/3-dan-tuite" DESCRIPTION="" v-if="admin  || rank >=12 "/>
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
      title: 'Tuite | CMAA',
      meta: [
        { name: 'description', content: 'OSMKKF Tuite drills' },
        
      ],
    
    }
  }
}
</script>
