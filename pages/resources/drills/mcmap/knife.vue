<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Knife Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Block against Reverse Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/knife/reverse-block" />
            <linkbutton NAME="Block against Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/knife/thrust-block" />
            <linkbutton NAME="Counter to Forward Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/knife/forward-counter" />
            <linkbutton NAME="Counter to Vertical Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/knife/vertical-counter" />
            <linkbutton NAME="Bulldogging" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/knife/bulldogging" />
            <linkbutton NAME="Forward Slash" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/knife/forward-slash" />
            <linkbutton NAME="Forward Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/knife/forward-thrust" />
            <linkbutton NAME="Reverse Slash" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/knife/reverse-slash" />
            <linkbutton NAME="Reverse Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/knife/reverse-thrust" />
            <linkbutton NAME="Vertical Slash" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/knife/slash" />
            <linkbutton NAME="Vertical Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/knife/thrust" />
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
      title: 'MCMAP Knife | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Knife drills' },
        
      ],
    
    }
  }
}
</script>
