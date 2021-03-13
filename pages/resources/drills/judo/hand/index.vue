<template>
  <div>
    
    <main>
      <article>
        <h1>Hand Throw Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Ippon Seoi Nage" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/ippon-seoi-nage" DESCRIPTION=""/>
                <linkbutton NAME="Kata Guruma" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/kata-guruma" DESCRIPTION=""/>
                <linkbutton NAME="Kibisu Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/kibisu-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Kuchiki Taoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/kuchiki-taoshi" DESCRIPTION=""/>
                <linkbutton NAME="Morote Gari" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/morote-gari" DESCRIPTION=""/>
                <linkbutton NAME="Obi Otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/obi-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Obi Tori Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/obi-tori-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Seoi Nage" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/seoi-nage" DESCRIPTION=""/>
                <linkbutton NAME="Seoi Otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/seoi-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Sukui Nage" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/sukui-nage" DESCRIPTION=""/>
                <linkbutton NAME="Sumi Otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/sumi-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Tai otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/tai-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Uchimata Sukashi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/uchimata-sukashi" DESCRIPTION=""/>
                <linkbutton NAME="Uki Otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/uki-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Yama Arashi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand/yama-arashi" DESCRIPTION=""/>
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
      title: 'Hand Throw | CMAA',
      meta: [
        { name: 'description', content: 'Various Hand Throw drills' },
        
      ],
    
    }
  }
}
</script>
