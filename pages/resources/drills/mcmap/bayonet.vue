<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Bayonet Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Disrupt" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/bayonet/disrupt" />
            <linkbutton NAME="Horizontal Buttstroke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/bayonet/horizontal" />
            <linkbutton NAME="Slash" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/bayonet/slash" />
            <linkbutton NAME="Smash" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/bayonet/smash" />
            <linkbutton NAME="Straight Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/bayonet/thrust" />
            <linkbutton NAME="Vertical Buttstroke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/bayonet/vertical" />
            <linkbutton NAME="1-2 Bayonet Fighting" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/bayonet/1-2" />
            <linkbutton NAME="2-1 Bayonet Fighting" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/bayonet/2-1" />
            <linkbutton NAME="2-2 Bayonet Fighting" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/bayonet/2-2" />
            <linkbutton NAME="Offline Buttstroke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/offline-buttstroke" />
            <linkbutton NAME="Bayonet Rush" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/bayonet/rush" />
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
      title: 'MCMAP Bayonet | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Bayonet drills' },
        
      ],
    
    }
  }
}
</script>
