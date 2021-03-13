<template>
  <div>
    
    <main>
      <article>
        <h1>Drills</h1>
      </article>
            <article>
              <h3 href="#osmkkf" data-toggle="collapse" @click="osmkkf = !osmkkf">OSMKKF  <span v-if="!osmkkf"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="osmkkf" class="container-fluid collapse">
                <div class="row justify-content-center text-center">
                    <linkbutton SRC='osmkkf_logo.png' NAME="Basics" LNK="/resources/drills/osmkkf/basics" DESCRIPTION="" />
                    <linkbutton SRC='osmkkf_logo.png' NAME="Ippon Kumite" LNK="/resources/drills/osmkkf/ippon-kumite" DESCRIPTION="Karate and Kobdo" />
                    <linkbutton SRC='osmkkf_logo.png' NAME="Tuite" LNK="/resources/drills/osmkkf/tuite" DESCRIPTION="" />
                    <linkbutton SRC='osmkkf_logo.png' NAME="Koteatei" LNK="/resources/drills/osmkkf/koteatei" DESCRIPTION="" />
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#kali" data-toggle="collapse" @click="kali = !kali">Kali  <span v-if="!kali"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="kali" class='container-fluid collapse'>
                <div class="row justify-content-center text-center">
                  <linkbutton NAME="Footwork" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/footwork" DESCRIPTION="" />
                  <linkbutton NAME="Open Hand" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/open-hand" DESCRIPTION="" />
                  <linkbutton NAME="Single Stick" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/single-stick" DESCRIPTION="" />
                  <linkbutton NAME="Single Knife" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/single-knife" DESCRIPTION="" />
                  <linkbutton NAME="Stick and Knife" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/stick-knife" DESCRIPTION="" />
                  <linkbutton NAME="Double Stick" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/double-stick" DESCRIPTION="" />
                  <linkbutton NAME="Double Knife" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/souble-knife" DESCRIPTION="" />
                  <linkbutton NAME="Karambit" SRC="osmkkf_logo.png" LNK="/resources/drills/kali/karambit" DESCRIPTION="" />
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#silat" data-toggle="collapse" @click="silat = !silat">Silat  <span v-if="!silat"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="silat" class='container-fluid collapse'>
                <div class="row justify-content-center text-center">
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#muay" data-toggle="collapse" @click="muay = !muay">Muay Thai  <span v-if="!muay"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="muay" class='container-fluid collapse'>
                <div class="row justify-content-center text-center">
                  <linkbutton SRC="osmkkf_logo.png" NAME="Basics" LNK="/resources/drills/muay/" DESCRIPTION=""/>
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#shilleleigh" data-toggle="collapse" @click="shilleleigh = !shilleleigh">Shilleleigh  <span v-if="!shilleleigh"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="jiujitsu" class="container-fluid collapse">
                <div class="row justify-content-center text-center">
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#jiujitsu" data-toggle="collapse" @click="jiujitsu = !jiujitsu">Jiu Jitsu  <span v-if="!jiujitsu"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="jiujitsu" class="container-fluid collapse">
                <div class="row justify-content-center text-center">
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#judo" data-toggle="collapse" @click="judo = !judo">Judo  <span v-if="!judo"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="judo" class="container-fluid collapse">
                <div class="row justify-content-center text-center">
                  <linkbutton NAME="Hand Throws" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hand" DESCRIPTION="Te Waza"/>
                  <linkbutton NAME="Foot Throws" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/foot" DESCRIPTION="Ashi Waza"/>
                  <linkbutton NAME="Hip Throws" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/hip" DESCRIPTION="Koshi Waza"/>
                  <linkbutton NAME="Back Sacrifices" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/rear" DESCRIPTION="Ma Sutemi Waza"/>
                  <linkbutton NAME="Side Sacrifices" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/side" DESCRIPTION="Yoko Sutemi Waza"/>
                  <linkbutton NAME="Holds" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/holds" DESCRIPTION="Osae Komi Waza"/>
                  <linkbutton NAME="Chokes" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/locks" DESCRIPTION="Shime Waza"/>
                  <linkbutton NAME="Locks" SRC="osmkkf_logo.png" LNK="/resources/drills/judo/chokes" DESCRIPTION="Kansetsu Waza"/>
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#capoeira" data-toggle="collapse" @click="capoeira = !capoeira">Capoeria  <span v-if="!capoeira"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="capoeira" class="container-fluid collapse">
                <div class="row justify-content-center text-center">
                  <linkbutton NAME="Striking" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/strikes" DESCRIPTION=""/>
                  <linkbutton NAME="Kicking" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/kicks" DESCRIPTION=""/>
                  <linkbutton NAME="Evasion" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/evasions" DESCRIPTION=""/>
                  <linkbutton NAME="Throwing" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/throws" DESCRIPTION=""/>
                  <linkbutton NAME="Floreios" SRC="osmkkf_logo.png" LNK="/resources/drills/capoeira/floreios" DESCRIPTION=""/>
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#aiki" data-toggle="collapse" @click="aiki = !aiki">Aiki  <span v-if="!aiki"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="aiki" class="container-fluid collapse">
                <div class="row justify-content-center text-center">
                    <linkbutton SRC='osmkkf_logo.png' NAME="Daito-ryu Aikijujitsu" LNK="/resources/drills/aiki/daito-ryu" DESCRIPTION=""/>
                    <linkbutton SRC='osmkkf_logo.png' NAME="Mukaku-ryu Aikijujitsu" LNK="/resources/drills/aiki/mukaku-ryu" DESCRIPTION=""/>
                    <linkbutton SRC='osmkkf_logo.png' NAME="Mubyoshi-ryu Aikijujitsu" LNK="/resources/drills/aiki/mubyoshi-ryu" DESCRIPTION=""/>
                </div>
              </div>
            </article>
            <article  v-if="admin ">
              <h3 href="#kenjutsu" data-toggle="collapse" @click="kenjutsu = !kenjutsu">Kenjutsu  <span v-if="!kenjutsu"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>

            </article>
            <article  v-if="admin ">
              <h3 href="#mcmap" data-toggle="collapse" @click="mcmap = !mcmap">MCMAP  <span v-if="!mcmap"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
              <div id="mcmap" class="container-fluid collapse">
                <p>All tehcniques from the Marine Corps Martial Arts Program guide as defined by MCRP 3-02B and distributed by Carlile Military Library in 2019. This is a handy guide that covers things we don't usually cover, such as ground fighting and close-quarters gun fighting. There's no testing (since we aren't the Marines), so if you feel like it, you can go to Amazon and pick up the apropriate belt.</p>
                <div class="row justify-content-center text-center">
                  <linkbutton SRC='osmkkf_logo.png' NAME="Tan Belt" LNK="/resources/drills/mcmap/tan" DESCRIPTION="All Tan Techniqes"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Grey Belt" LNK="/resources/drills/mcmap/grey" DESCRIPTION="All Grey Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Green Belt" LNK="/resources/drills/mcmap/green" DESCRIPTION="All Green Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Brown Belt" LNK="/resources/drills/mcmap/brown" DESCRIPTION="All Brown Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Black Belt" LNK="/resources/drills/mcmap/black" DESCRIPTION="All Black Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Upper Body Strikes" LNK="/resources/drills/mcmap/upper" DESCRIPTION="All Upper Body Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Lower Body Strikes" LNK="/resources/drills/mcmap/lower" DESCRIPTION="All Lower Body Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Chokes" LNK="/resources/drills/mcmap/chokes" DESCRIPTION="All Choking Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Throws" LNK="/resources/drills/mcmap/throws" DESCRIPTION="All Throwing Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Strike Counters" LNK="/resources/drills/mcmap/strike-counters" DESCRIPTION="All Strike Counter Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Choke Counters" LNK="/resources/drills/mcmap/choke-counters" DESCRIPTION="All Choke Counter Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Unarmed Manipulation" LNK="/resources/drills/mcmap/unarmed-manipulation" DESCRIPTION="All Unarmed Manipulation Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Armed Manipulation" LNK="/resources/drills/mcmap/armed-manipulation" DESCRIPTION="All Armed Manipulation Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Knife Techniques" LNK="/resources/drills/mcmap/knife" DESCRIPTION="All Knife Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Weapons of Opportunity" LNK="/resources/drills/mcmap/opportunity" DESCRIPTION="All Improvised Weapons Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Bayonet" LNK="/resources/drills/mcmap/bayonet" DESCRIPTION="All Bayonet Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Firearms" LNK="/resources/drills/mcmap/firearms" DESCRIPTION="All Firearms Techniques"/>
                  <linkbutton SRC='osmkkf_logo.png' NAME="Ground Fighting" LNK="/resources/drills/mcmap/ground" DESCRIPTION="All Ground FightingTechniques"/>
                </div>
              </div>
            </article>

    </main>
    
  </div>
</template>

<script>
import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  data() {
    return{
    osmkkf: false,
    karate : false,
    kali: false,
    tkd : false,
    iaido : false,
    silat : false,
    wc : false,
    tc : false,
    arnis : false,
    kendo: false,
    kenjutsu: false,
    muay: false,
    systema: false,
    mcmap: false,
    capoeira: false,
    aiki: false,
    judo: false,
    jiujitsu: false,
    sambo: false,
    km: false,
    shilleleigh: false,
      rank: 0,
      admin: false,
      sensei: false
    }
  },
  mounted(){
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
    this.rank = this.$store.getters.rankKarate.length
    this.admin = this.$store.getters.role >= 4
  },
  head () {
    return {
      title: 'Drills | CMAA',
      meta: [
        { name: 'description', content: 'Various fighting drills, split up by martial art' },
        
      ],
    
    }
  }
}
</script>
