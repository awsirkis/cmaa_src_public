<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Firearms Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Counter Pistol to the Head" DESCRIPTION="1 Hand" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/guns/1-hand" />
            <linkbutton NAME="Counter PIstol to the Head" DESCRIPTION="2 Hand" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/black/guns/2-hand" />
            <linkbutton NAME="Armbar Retention" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/armbar" />
            <linkbutton NAME="Blocking Retention" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/blocking" />
            <linkbutton NAME="Counter to Front Pistol" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/front-pistol" />
            <linkbutton NAME="Counter to Rear Pistol" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/rear-pistol" />
            <linkbutton NAME="Same Side Grab from Front" DESCRIPTION="Retention" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/ss-back" />
            <linkbutton NAME="Same Side Grab from Back" DESCRIPTION="Retention" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/ss-front" />
            <linkbutton NAME="Wristlock Retention" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/wristlock" />
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
      title: 'MCMAP Firearms | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Firearms drills' },
        
      ],
    
    }
  }
}
</script>
