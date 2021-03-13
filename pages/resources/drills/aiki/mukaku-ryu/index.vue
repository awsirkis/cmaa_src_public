<template>
  <div>
    
    <main>
      <article>
        <h1>Mukaku-ryu Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='osmkkf_logo.png' NAME="Ainuki" LNK="/resources/drills/aiki/mukaku-ryu/ainuki" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Bichuuken" LNK="/resources/drills/aiki/mukaku-ryu/bichuuken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Chuuseiken" LNK="/resources/drills/aiki/mukaku-ryu/chueeseiken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Enkai" LNK="/resources/drills/aiki/mukaku-ryu/enkai" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Enpi" LNK="/resources/drills/aiki/mukaku-ryu/enpi" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Hien" LNK="/resources/drills/aiki/mukaku-ryu/hien" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Hiryuu" LNK="/resources/drills/aiki/mukaku-ryu/hiryuu" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kaerimi" LNK="/resources/drills/aiki/mukaku-ryu/kaerimi" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kakegiri" LNK="/resources/drills/aiki/mukaku-ryu/kakegiri" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kasumigiri" LNK="/resources/drills/aiki/mukaku-ryu/kasumigiri" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kenshouken" LNK="/resources/drills/aiki/mukaku-ryu/kenshouken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kotezume" LNK="/resources/drills/aiki/mukaku-ryu/kotezume" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kumotsuke" LNK="/resources/drills/aiki/mukaku-ryu/kumotsuke" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Manshouken" LNK="/resources/drills/aiki/mukaku-ryu/manshouken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Nigiki Hidarikiri" LNK="/resources/drills/aiki/mukaku-ryu/nigiki-hidarikiri" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Ouzume" LNK="/resources/drills/aiki/mukaku-ryu/ouzume" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Raikou" LNK="/resources/drills/aiki/mukaku-ryu/raikou" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Saishouken" LNK="/resources/drills/aiki/mukaku-ryu/saishouken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Sanpougiri" LNK="/resources/drills/aiki/mukaku-ryu/sanpougiri" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Sanseiken" LNK="/resources/drills/aiki/mukaku-ryu/sanseiken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Seikiken" LNK="/resources/drills/aiki/mukaku-ryu/seikiken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Shichiyouken" LNK="/resources/drills/aiki/mukaku-ryu/shichiyouken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Shinmyouken" LNK="/resources/drills/aiki/mukaku-ryu/shinmyouken" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Surinuki" LNK="/resources/drills/aiki/mukaku-ryu/surinuki" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Tappi" LNK="/resources/drills/aiki/mukaku-ryu/tappi" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Unryuu" LNK="/resources/drills/aiki/mukaku-ryu/unryuu" DESCRIPTION=""/>
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
      title: 'Mukaku-ryu | CMAA',
      meta: [
        { name: 'description', content: 'Various Aiki drills' },
        
      ],
    
    }
  }
}
</script>
