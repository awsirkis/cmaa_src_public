<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Strike Counters Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Round Kick Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/strike-counters/round-kick" />
            <linkbutton NAME="Round Punch Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/strike-counters/round-punch" />
            <linkbutton NAME="Lead Kick Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/strike-counters/lead-kick" />
            <linkbutton NAME="Lead Punch Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/strike-counters/lead" />
            <linkbutton NAME="Counter to Rear Punch" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/strike-counters/punch" />
            <linkbutton NAME="Counter to Rear Kick" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/strike-counters/kick" />
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
      title: 'MCMAP Strike Counters | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Strike Counters drills' },
        
      ],
    
    }
  }
}
</script>
