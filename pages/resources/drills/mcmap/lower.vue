<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Lower Body Strike Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Lower Strikes" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/lower-strikes" />
            <linkbutton NAME="Axe Stomp" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/lower/axe-stomp" />
            <linkbutton NAME="Horizontal Knee" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/lower/horizontal-knee" />
            <linkbutton NAME="Side Kick" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/lower/side-kick" />
            <linkbutton NAME="Vertical Knee Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/lower/vertical" />
            <linkbutton NAME="Round Kick" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/lower/round" />
            <linkbutton NAME="Front Kick" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/lower/front" />
            <linkbutton NAME="Vertical Stomp" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/lower/stomp" />
          </div>
        </div>
    </main>
    
  </div>
</template>

<script>import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  head () {
    return {
      title: 'MCMAP Lower Body Strike | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Lower Body Strike drills' },
        
      ],
    
    }
  }
}
</script>
