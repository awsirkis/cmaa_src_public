<template>
  <div>
    
    <main>
      <article>
        <h1>Lock Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Ude Garami" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/lcoks/ude-garami" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Ashi Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-ashi-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Hara Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-hara-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Hiza Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-hiza-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Juji Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-juji-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Sankaku Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-sankaku-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Te Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-te-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Ude Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-ude-gatame" DESCRIPTION=""/>
                <linkbutton NAME="Ude Hishigi Waki Gatame" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks/ude-hishigi-waki-gatame" DESCRIPTION=""/>
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
      title: 'Lock | CMAA',
      meta: [
        { name: 'description', content: 'Various Lock drills' },
        
      ],
    
    }
  }
}
</script>
