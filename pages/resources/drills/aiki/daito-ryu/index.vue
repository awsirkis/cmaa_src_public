<template>
  <div>
    
    <main>
      <article>
        <h1>Daito-ryu Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='osmkkf_logo.png' NAME="Hidden Mokuroku - Ikkajo" LNK="/resources/drills/aiki/daito-ryu/ikkajo" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Hidden Mokuroku - Nikajo" LNK="/resources/drills/aiki/daito-ryu/nikajo" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Hidden Mokuroku - Mikajo" LNK="/resources/drills/aiki/daito-ryu/mikajo" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Hidden Mokuroku - Yokajo" LNK="/resources/drills/aiki/daito-ryu/yokajo" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Hidden Mokuroku - Gokajo" LNK="/resources/drills/aiki/daito-ryu/gokajo" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Aiki no Jutsu" LNK="/resources/drills/aiki/daito-ryu/aiki-no-jutsu" DESCRIPTION=""/>
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
      title: 'Daito-ryu | CMAA',
      meta: [
        { name: 'description', content: 'Various Aiki drills' },
        
      ],
    
    }
  }
}
</script>
