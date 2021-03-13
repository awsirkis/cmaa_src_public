<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Brown Belt Drills</h1>
      </article>
      <article>
        <h3 href="#throws" data-toggle="collapse" @click="throws = !throws">Throws  <span v-if="!throws"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="throws" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Outside Reap Throw" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/outside-reap-throw" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#unarmed" data-toggle="collapse" @click="unarmed = !unarmed">Unarmed Manipulation  <span v-if="!unarmed"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="unarmed" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Bent Armbar Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/unarmed-manipulation/bent-armbar" />
            <linkbutton NAME="Forward Armbar Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/unarmed-manipulation/forward-armbar" />
            <linkbutton NAME="Hoowing Out" DESCRIPTION="w/ follow-on technique" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/unarmed-manipulation/hollow-out" />
            <linkbutton NAME="Reverse Armbar Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/unarmed-manipulation/reverse-armbar" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#knife" data-toggle="collapse" @click="knife = !knife">Knife Fighting  <span v-if="!knife"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="knife" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Block against Reverse Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/knife/reverse-block" />
            <linkbutton NAME="Block against Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/knife/thrust-block" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#bayonet" data-toggle="collapse" @click="bayonet = !bayonet">Bayonet  <span v-if="!bayonet"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="bayonet" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="1-2 Bayonet Fighting" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/bayonet/1-2" />
            <linkbutton NAME="2-1 Bayonet Fighting" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/bayonet/2-1" />
            <linkbutton NAME="2-2 Bayonet Fighting" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/bayonet/2-2" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#ground" data-toggle="collapse" @click="ground = !ground">Ground Fighting  <span v-if="!ground"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="ground" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Front Ground Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/front-choke" />
            <linkbutton NAME="Leg Lock" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/leglock" />
            <linkbutton NAME="Rear Ground Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/rear-ground-choke" />
            <linkbutton NAME="Side Ground Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/ground/side-choke" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#guns" data-toggle="collapse" @click="guns = !guns">Firearms  <span v-if="!guns"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="guns" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Armbar Retention" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/armbar" />
            <linkbutton NAME="Blocking Retention" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/blocking" />
            <linkbutton NAME="Counter to Front Pistol" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/front-pistol" />
            <linkbutton NAME="Counter to Rear Pistol" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/rear-pistol" />
            <linkbutton NAME="Same Side Grab from Front" DESCRIPTION="Retention" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/ss-back" />
            <linkbutton NAME="Same Side Grab from Back" DESCRIPTION="Retention" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/guns/ss-front" />
            <linkbutton NAME="Wristlock Retention" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/brown/wristlock" />
          </div>
        </div>
      </article>
    </main>
    
  </div>
</template>

<script>import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  data(){
    return{
      throws:false,
      unarmed: false,
      knife: false,
      bayonet: false,
      ground: false,
      guns: false
    }
  },
  head () {
    return {
      title: 'MCMAP Brown Belt | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Brown Belt drills' },
        
      ],
    
    }
  }
}
</script>
