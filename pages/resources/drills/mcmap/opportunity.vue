<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Improvised Weapons Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Garrote from Front" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/opportunity/front-garrote" />
            <linkbutton NAME="Garrote from Rear" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/opportunity/rear-garrote" />
            <linkbutton NAME="Block a Forward Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/forward-block" />
            <linkbutton NAME="Block a Reverse Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/reverse-block" />
            <linkbutton NAME="Block a Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/thrust-block" />
            <linkbutton NAME="Block a Vertical Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/vertical-block" />
            <linkbutton NAME="Forward Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/opportunity/forward-strike" />
            <linkbutton NAME="Reverse Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/opportunity/reverse-strike" />
            <linkbutton NAME="Straight Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/opportunity/straight-thrust" />
            <linkbutton NAME="Vertical Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/opportunity/vertical-strike" />
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
      title: 'MCMAP Improvised Weapons | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Improvised Weapons drills' },
        
      ],
    
    }
  }
}
</script>
