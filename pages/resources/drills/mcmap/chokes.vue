<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Choke Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Guillotine Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/chokes/guillotine" />
            <linkbutton NAME="Triangle Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/chokes/triangle" />
            <linkbutton NAME="Side Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/side-choke" />
            <linkbutton NAME="Front Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/front-choke" />
            <linkbutton NAME="Rear Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/chokes/figure-four" />
            <linkbutton NAME="Figure-4 Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/chokes/rear" />
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
      title: 'MCMAP Choke | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Choke drills' },
        
      ],
    
    }
  }
}
</script>
