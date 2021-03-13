<template>
  <div>
    
    <main>
      <article>
        <h1>Back Sacrifice Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
                <linkbutton NAME="Hikikomi Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/hikikomi-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Sumi Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/sumi-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Tamoe Nage" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/tamoe-nage" DESCRIPTION=""/>
                <linkbutton NAME="Tani Otoshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/tani-otoshi" DESCRIPTION=""/>
                <linkbutton NAME="Tawara Gaeshi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/tawara-gaeshi" DESCRIPTION=""/>
                <linkbutton NAME="Uchi Makikomi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/uchi-makikomi" DESCRIPTION=""/>
                <linkbutton NAME="Uchi Mata Makikomi" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/uchi-mata-makikomi" DESCRIPTION=""/>
                <linkbutton NAME="Ura Nage" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear/ura-nage" DESCRIPTION=""/>
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
      title: 'Back Sacrifice | CMAA',
      meta: [
        { name: 'description', content: 'Various Back Sacrifice drills' },
        
      ],
    
    }
  }
}
</script>
