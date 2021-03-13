<template>
  <div>
    
    <main>
      <article>
        <h1>Hip Throw Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Hane Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/hane-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Harai Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/harai-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Koshi Guruma" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/koshi-guruma" DESCRIPTION=""/>
                <linkbutton NAME="O Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/o-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Sode Tsurikomi Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/sode-tsurikomi-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Tsuri Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/tsuri-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Tsurikomi Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/tsurikomi-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Uki Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/uki-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Ushiro Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/ushiro-goshi" DESCRIPTION=""/>
                <linkbutton NAME="Utsuri Goshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/utsuri-goshi" DESCRIPTION=""/>
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
      title: 'Hip Throw | CMAA',
      meta: [
        { name: 'description', content: 'Various Hip Throw drills' },
        
      ],
    
    }
  }
}
</script>
