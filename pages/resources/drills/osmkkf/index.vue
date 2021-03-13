<template>
  <div>
    
    <main>
      <article>
        <h1>OSMKKF Drills</h1>
      </article>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <linkbutton SRC='osmkkf_logo.png' NAME="Basics" LNK="/resources/drills/osmkkf/basics" DESCRIPTION="" />
            <linkbutton SRC='osmkkf_logo.png' NAME="Ippon Kumite" LNK="/resources/drills/osmkkf/ippon-kumite" DESCRIPTION="Karate and Kobdo" />
            <linkbutton SRC='osmkkf_logo.png' NAME="Tuite" LNK="/resources/drills/osmkkf/tuite" DESCRIPTION="" />
            <linkbutton SRC='osmkkf_logo.png' NAME="Koteatei" LNK="/resources/drills/osmkkf/koteatei" DESCRIPTION="" />
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
      title: 'OSMKKF Drills | CMAA',
      meta: [
        { name: 'description', content: 'OSMKKF Drills' },
        
      ],
    
    }
  }
}
</script>
