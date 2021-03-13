<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Green Belt Drills</h1>
      </article>
      <article>
        <h3 href="#lower" data-toggle="collapse" @click="lower = !lower">Lower Body Strikes  <span v-if="!lower"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="lower" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Lower Strikes" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/lower-strikes" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#chokes" data-toggle="collapse" @click="chokes = !chokes">Chokes  <span v-if="!chokes"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="chokes" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Side Choke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/side-choke" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#throws" data-toggle="collapse" @click="throws = !throws">Throws  <span v-if="!throws"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="throws" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Shoulder Throw" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/Shoulder-throw" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#strike_counters" data-toggle="collapse" @click="strike_counters = !strike_counters">Strike Counters  <span v-if="!strike_counters"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="strike_counters" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Round Kick Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/strike-counters/round-kick" />
            <linkbutton NAME="Round Punch Counter" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/strike-counters/round-punch" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#unarmed" data-toggle="collapse" @click="unarmed = !unarmed">Unarmed Manipulation  <span v-if="!unarmed"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="unarmed" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Enhanced Pain Compliance" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/unarmed-manipulation/pain" />
            <linkbutton NAME="Reverse Wristlock Come-Along" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/unarmed-manipulation/reverse-wristlock" />
            <linkbutton NAME="Controlling Techniques" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/unarmed-manipulation/controlling" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#knife" data-toggle="collapse" @click="knife = !knife">Knife Fighting  <span v-if="!knife"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="knife" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Counter to Forward Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/knife/forward-counter" />
            <linkbutton NAME="Counter to Vertical Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/knife/vertical-counter" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#bayonet" data-toggle="collapse" @click="bayonet = !bayonet">Bayonet  <span v-if="!bayonet"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="bayonet" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Offline Buttstroke" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/offline-buttstroke" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#opportunity" data-toggle="collapse" @click="opportunity = !opportunity">Weapons of Opportunity  <span v-if="!opportunity"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="opportunity" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Block a Forward Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/forward-block" />
            <linkbutton NAME="Block a Reverse Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/reverse-block" />
            <linkbutton NAME="Block a Thrust" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/thrust-block" />
            <linkbutton NAME="Block a Vertical Strike" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/opportunity/vertical-block" />
          </div>
        </div>
      </article>
      <article>
        <h3 href="#ground" data-toggle="collapse" @click="ground = !ground">Ground Fighting  <span v-if="!ground"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div id="ground" class="container-fluid collapse">
          <div class="row justify-content-center text-center">
            <linkbutton NAME="Armbar from Guard" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/ground/guard-armbar" />
            <linkbutton NAME="Armbar from Mount" DESCRIPTION="" SRC="osmkkf_logo.png" LNK="/resources/drills/mcmap/green/ground/mount-armbar" />
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
      upper:false,
      lower:false,
      chokes:false,
      throws:false,
      strike_counters:false,
      choke_counters:false,
      armed: false,
      unarmed: false,
      knife: false,
      bayonet: false,
      opportunity: false,
      ground: false
    }
  },
  head () {
    return {
      title: 'MCMAP Green Belt | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Green Belt drills' },
        
      ],
    
    }
  }
}
</script>
