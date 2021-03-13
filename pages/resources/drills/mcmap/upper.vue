<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Upper Body Strike Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Cup Hand Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/upper/cuphand" />
            <linkbutton NAME="Face Smash" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/upper/smash" />
            <linkbutton NAME="Knife Hand Strikes" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/upper/knifehand" />
            <linkbutton NAME="Palm Heel Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/upper/palm" />
            <linkbutton NAME="Rear Elbow" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/upper/rear-elbow" />
            <linkbutton NAME="Reverse Knife Hand" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/upper/reverse-knifehand" />
            <linkbutton NAME="Vertical Elbow" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/upper/vertical-elbow" />
            <linkbutton NAME="Vertical Knife Hand" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/upper/vertical-knifehand" />
            <linkbutton NAME="Hammer Fist" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/upper/hammer" />
            <linkbutton NAME="Eye Gouge" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/upper/gouge" />
            <linkbutton NAME="Rising Elbow Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/upper/vertical" />
            <linkbutton NAME="Horizontal Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/upper/horizontal" />
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
      title: 'MCMAP Upper Body Strike | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Upper Body Strike drills' },
        
      ],
    
    }
  }
}
</script>
