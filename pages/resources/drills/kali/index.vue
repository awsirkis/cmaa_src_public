<template>
  <div>
    
    <main>
      <article>
        <h1>Kali Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Footwork" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/footwork" DESCRIPTION="" />
            <linkbutton NAME="Open Hand" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/open-hand" DESCRIPTION="" />
            <linkbutton NAME="Single Stick" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/single-stick" DESCRIPTION="" />
            <linkbutton NAME="Single Knife" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/single-knife" DESCRIPTION="" />
            <linkbutton NAME="Stick and Knife" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/stick-knife" DESCRIPTION="" />
            <linkbutton NAME="Double Stick" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/double-stick" DESCRIPTION="" />
            <linkbutton NAME="Double Knife" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/souble-knife" DESCRIPTION="" />
            <linkbutton NAME="Karambit" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/karambit" DESCRIPTION="" />
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
      title: 'Kali | CMAA',
      meta: [
        { name: 'description', content: 'Various Kali drills' },
        
      ],
    
    }
  }
}
</script>
