<template>
  <div>
    
    <main>
      <article>
        <h1>Capoeira Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Striking" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/strikes" DESCRIPTION=""/>
            <linkbutton NAME="Kicking" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/kicks" DESCRIPTION=""/>
            <linkbutton NAME="Evasion" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/evasions" DESCRIPTION=""/>
            <linkbutton NAME="Throwing" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/throws" DESCRIPTION=""/>
            <linkbutton NAME="Floreios" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/floreios" DESCRIPTION=""/>

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
      title: 'Capoeira | CMAA',
      meta: [
        { name: 'description', content: 'Various Capoeira drills' },
        
      ],
    
    }
  }
}
</script>
