<template>
  <div>
    
    <main>
      <article>
        <h1>Side Sacrifice Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Daki Wakare" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/daki-wakare" DESCRIPTION=""/>
                <linkbutton NAME="Hane Makikomi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/hane-makikomi" DESCRIPTION=""/>
                <linkbutton NAME="Harai Makikomi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/harai-makikomi" DESCRIPTION=""/>
                <linkbutton NAME="Kouchi Makikomi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/kouchi-makikomi" DESCRIPTION=""/>
                <linkbutton NAME="Osoto Makikomi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/osoto-makikomi" DESCRIPTION=""/>
                <linkbutton NAME="Soto Makikomi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/soto-makikomi" DESCRIPTION=""/>
                <linkbutton NAME="Uki Waza" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/uki-waza" DESCRIPTION=""/>
                <linkbutton NAME="Yoko Gake" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/yoko-gake" DESCRIPTION=""/>
                <linkbutton NAME="Yoko Guruma" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/yoko-guruma" DESCRIPTION=""/>
                <linkbutton NAME="Yoko Otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/yoko-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Yoko Wakare" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side/yoko-wakare" DESCRIPTION=""/>
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
      title: 'Side Sacrifice | CMAA',
      meta: [
        { name: 'description', content: 'Various Side Sacrifice drills' },
        
      ],
    
    }
  }
}
</script>
