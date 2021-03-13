<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='osmkkf_logo.png' NAME="Tan Belt" LNK="/resources/drills/mcmap/tan" DESCRIPTION="All Tan Techniqes"/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Grey Belt" LNK="/resources/drills/mcmap/grey" DESCRIPTION="All Grey Techniques"/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Green Belt" LNK="/resources/drills/mcmap/green" DESCRIPTION="All Green Techniques"/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Brown Belt" LNK="/resources/drills/mcmap/brown" DESCRIPTION="All Brown Techniques"/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Black Belt" LNK="/resources/drills/mcmap/black" DESCRIPTION="All Black Techniques"/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Upper Body Strikes" LNK="/resources/drills/mcmap/upper" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Lower Body Strikes" LNK="/resources/drills/mcmap/lower" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Chokes" LNK="/resources/drills/mcmap/chokes" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Throws" LNK="/resources/drills/mcmap/throws" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Strike Counters" LNK="/resources/drills/mcmap/strike-counters" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Choke Counters" LNK="/resources/drills/mcmap/choke-counters" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Unarmed Manipulation" LNK="/resources/drills/mcmap/unarmed-manipulation" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Armed Manipulation" LNK="/resources/drills/mcmap//armed-manipulation" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Knife Techniques" LNK="/resources/drills/mcmap/knife" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Weapons of Opportunity" LNK="/resources/drills/mcmap/opportunity" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Bayonet" LNK="/resources/drills/mcmap/bayonet" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Firearms" LNK="/resources/drills/mcmap/firearms" DESCRIPTION=""/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Ground Fighting" LNK="/resources/drills/mcmap/ground" DESCRIPTION=""/>
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
      title: 'MCMAP | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP drills' },
        
      ],
    
    }
  }
}
</script>
