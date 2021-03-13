<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Choke Counters Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Counter to Front Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/choke-counters/choke" />
            <linkbutton NAME="Counter to Front Headlock" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/strike-counters/headlock" />
            <linkbutton NAME="Coutner to Front Bear Hug" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/strike-counters/bearhug" />
            <linkbutton NAME="Counter to Rear Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/choke-counters/rear" />
            <linkbutton NAME="Counter to Rear Headlock" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/choke-counters/headlock" />
            <linkbutton NAME="Counter to Rear Bear Hug" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/choke-counters/bearhug" />
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
      title: 'MCMAP Choke Counters | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Choke Counters drills' },
        
      ],
    
    }
  }
}
</script>
