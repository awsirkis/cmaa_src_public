<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Throwing Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Sweeping Hip Throw" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/sweeping-hip-throw" />
            <linkbutton NAME="Outside Reap Throw" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/outside-reap-throw" />
            <linkbutton NAME="Shoulder Throw" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/Shoulder-throw" />
            <linkbutton NAME="Hip Throw" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/hip-throw" />
            <linkbutton NAME="Leg Sweep" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/legsweep" />
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
      title: 'MCMAP Throwing | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Throwing drills' },
        
      ],
    
    }
  }
}
</script>
