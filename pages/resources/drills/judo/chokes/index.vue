<template>
  <div>
    
    <main>
      <article>
        <h1>Choke Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Gyaku Juji Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/gyaku-juji-jime" DESCRIPTION=""/>
                <linkbutton NAME="Hadaka Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/hadaka-jime" DESCRIPTION=""/>
                <linkbutton NAME="Kata Ha Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/kata-ha-jime" DESCRIPTION=""/>
                <linkbutton NAME="Kata Juji Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/kata-juji-jime" DESCRIPTION=""/>
                <linkbutton NAME="Kata Te Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/kata-te-jime" DESCRIPTION=""/>
                <linkbutton NAME="Nami Juji Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/nami-juji-jime" DESCRIPTION=""/>
                <linkbutton NAME="Okuri Eri Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/okuri-eri-jime" DESCRIPTION=""/>
                <linkbutton NAME="Ryo Te Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/ryo-te-jime" DESCRIPTION=""/>
                <linkbutton NAME="Sankaku Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/sankaku-jime" DESCRIPTION=""/>
                <linkbutton NAME="Sode Guruma Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/sode-guruma-jime" DESCRIPTION=""/>
                <linkbutton NAME="Tsukkomi Jime" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes/tsukkomi-jime" DESCRIPTION=""/>
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
      title: 'Choke | CMAA',
      meta: [
        { name: 'description', content: 'Various Choke drills' },
        
      ],
    
    }
  }
}
</script>
