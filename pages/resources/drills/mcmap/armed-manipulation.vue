<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Armed Manipulations Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Static Double Pull" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/armed-manipulation/double-pull" />
            <linkbutton NAME="Moving Double Pull" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/armed-manipulation/moving-pulling" />
            <linkbutton NAME="Static Double Push" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/armed-manipulation/double-push" />
            <linkbutton NAME="Overgrab and Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/armed-manipulation/over-strike" />
            <linkbutton NAME="Undergrab and Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/grey/armed-manipulation/under-strike" />
            <linkbutton NAME="Blocks" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/armed-manipulation/blocks" />
            <linkbutton NAME="Rifle and Shotgun Retention" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/tan/armed-manipulation/retention" />
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
      title: 'MCMAP Armed Manipulations | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Armed Manipulations drills' },
        
      ],
    
    }
  }
}
</script>
