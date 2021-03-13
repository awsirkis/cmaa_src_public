<template>
  <div>
    
    <main>
      <article>
        <h1>Aiki Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='osmkkf_logo.png' NAME="Daito-ryu" LNK="/resources/drills/aiki/daito-ryu" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Mukaku-ryu" LNK="/resources/drills/aiki/mukaku-ryu" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Mubyoshi-ryu" LNK="/resources/drills/aiki/mubyoshi-ryu" DESCRIPTION=""/>
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
      title: 'Aiki | CMAA',
      meta: [
        { name: 'description', content: 'Various Aiki drills' },
        
      ],
    
    }
  }
}
</script>
