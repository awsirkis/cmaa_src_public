<template>
  <div>
    
    <main>
      <article>
        <h1>Hold Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Kami Shiho Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/kami-shiho-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Kata Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/kata-gatame" DESCRIPTION=""/>
                <linkbutton NAME="kese Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/kese-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Kuzure Kami Shiho Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/kuzure-kami-shiho-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Kuzure Kese Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/kuzure-kese-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Tate Shiho Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/tate-shiho-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Uki Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/uki-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ushiro Kesa Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/ushiro-kesa-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Yoko Shiho Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip/yoko-shiho-gatame" DESCRIPTION=""/>
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
      title: 'Hold | CMAA',
      meta: [
        { name: 'description', content: 'Various Hold drills' },
        
      ],
    
    }
  }
}
</script>
