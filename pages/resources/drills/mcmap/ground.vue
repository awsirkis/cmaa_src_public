<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Ground Fighting Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Bent Armbar from Scarf Hold" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/ground/bent-armbar" />
            <linkbutton NAME="Face Rip from Guard" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/ground/face-rip" />
            <linkbutton NAME="Rolling Kneebar" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/ground/rolling-kneebar" />
            <linkbutton NAME="Sitting Kneebar" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/ground/sitting-kneebar" />
            <linkbutton NAME="Straight Armbar from Scarf Hold" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/ground/straight-armbar" />
            <linkbutton NAME="Front Ground Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/front-choke" />
            <linkbutton NAME="Leg Lock" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/leglock" />
            <linkbutton NAME="Rear Ground Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/rear-ground-choke" />
            <linkbutton NAME="Side Ground Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/side-choke" />
            <linkbutton NAME="Armbar from Guard" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/ground/guard-armbar" />
            <linkbutton NAME="Armbar from Mount" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/ground/mount-armbar" />
            <linkbutton NAME="Counter to Guard" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/ground/guard" />
            <linkbutton NAME="Counter to Mount" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/gournd/mount" />
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
      title: 'MCMAP Ground Fighting | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Ground Fighting drills' },
        
      ],
    
    }
  }
}
</script>
