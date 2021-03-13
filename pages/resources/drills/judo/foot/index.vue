<template>
  <div>
    
    <main>
      <article>
        <h1>Foot Throw Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Ashi Guruma" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/ashi-guruma" DESCRIPTION=""/>
                <linkbutton NAME="Deashi Harai" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/deashi-harai" DESCRIPTION=""/>
                <linkbutton NAME="Hane Goshi Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/hane-goshi-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Harai Goshi Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/harai-goshi-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Harai Tsurikomi Ashi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/harai-tsurikomi-ashi" DESCRIPTION=""/>
                <linkbutton NAME="Hiza Guruma" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/hiza-guruma" DESCRIPTION=""/>
                <linkbutton NAME="Kosoto Gake" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/kosoto-gake" DESCRIPTION=""/>
                <linkbutton NAME="Kosoto Gari" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/kosoto-gari" DESCRIPTION=""/>
                <linkbutton NAME="Kouchi Gari" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/kouchi-gari" DESCRIPTION=""/>
                <linkbutton NAME="O Guruma" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/o-guruma" DESCRIPTION=""/>
                <linkbutton NAME="Okuriashi Harai" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/okuriashi-harai" DESCRIPTION=""/>
                <linkbutton NAME="Osoto Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/osoto-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Osoto Gari" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/osoto-gari" DESCRIPTION=""/>
                <linkbutton NAME="Osoto Guruma" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/osoto-guruma" DESCRIPTION=""/>
                <linkbutton NAME="Osoto Otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/osoto-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Ouchi Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/ouchi-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Ouchi Gari" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/ouchi-gari" DESCRIPTION=""/>
                <linkbutton NAME="Sasae Tsurikomi Ashi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/sasae-tsurikomi-ashi" DESCRIPTION=""/>
                <linkbutton NAME="Tsubame Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/tsubame-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Uchimata" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot/uchimata" DESCRIPTION=""/>
          </div>
        </div>
    </main>
    
  </div>
</template>

<script>
import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  head () {
    return {
      title: 'Foot Throw | CMAA',
      meta: [
        { name: 'description', content: 'Various Foot Throw drills' },
        
      ],
    
    }
  }
}
</script>
