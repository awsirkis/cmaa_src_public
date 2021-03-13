<template>
  <div>
    
    <main>
      <article>
        <h1>Kata Video Resources</h1>
        <p>Click on a header to show the available kata! Some kata may not have videos yet, however they will soon.</p>
      </article>
      <article>
        <h3 href="#osmkkf-karate" data-toggle="collapse" @click="osmkkfKarate = !osmkkfKarate">OSMKKF Karate Kata <span v-if="!osmkkfKarate"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div class="container-fluid collapse" id="osmkkf-karate">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='kata/thumbnails/fukyukata-ichi.png' NAME="Fukyukata Ichi" LNK="/resources/kata/karate/fukyukata-ichi" DESCRIPTION="" v-if="admin  || rank >= 0"/>
              <linkbutton SRC='kata/thumbnails/fukyukata-ni.png' NAME="Fukyukata Ni" LNK="/resources/kata/karate/fukyukata-ni" DESCRIPTION="" v-if="admin  || rank >= 1 "/>
              <linkbutton SRC='kata/thumbnails/fukyukata-san.png' NAME="Fukyukata San" LNK="/resources/kata/karate/fukyukata-san" DESCRIPTION="" v-if="admin  || rank >=2 "/>
              <linkbutton SRC='kata/thumbnails/wansu.png' NAME="Wansu" LNK="/resources/kata/karate/wansu" DESCRIPTION="" v-if="admin  || rank >=3 "/>
              <linkbutton SRC='kata/thumbnails/pinan-shodan.png' NAME="Pin'an Shodan" LNK="/resources/kata/karate/pin-an-shodan" DESCRIPTION="" v-if="admin  || rank >=4 " />
              <linkbutton SRC='kata/thumbnails/pinan-nidan.png' NAME="Pin'an Nidan" LNK="/resources/kata/karate/pin-an-nidan" DESCRIPTION="" v-if="admin  || rank >=5 "/>
              <linkbutton SRC='kata/thumbnails/naihanchi-shodan.png' NAME="Naihanchi Shodan" LNK="/resources/kata/karate/naihanchi-shodan" DESCRIPTION="" v-if="admin  || rank >=6 "/>
              <linkbutton SRC='kata/thumbnails/pinan-sandan.png' NAME="Pin'an Sandan" LNK="/resources/kata/karate/pin-an-sandan" DESCRIPTION="" v-if="admin  || rank >=6 "/>
              <linkbutton SRC='kata/thumbnails/naihanchi-nidan.png' NAME="Naihanchi Nidan" LNK="/resources/kata/karate/naihanchi-nidan" DESCRIPTION="" v-if="admin  || rank >=7 "/>
              <linkbutton SRC='kata/thumbnails/ananko.png' NAME="Ananku" LNK="/resources/kata/karate/ananku" DESCRIPTION="" v-if="admin  || rank >=7 "/>
              <linkbutton SRC='kata/thumbnails/naihanchi-sandan.png' NAME="Naihanchi Sandan" LNK="/resources/kata/karate/naihanchi-sandan" DESCRIPTION="" v-if="admin  || rank >=8 "/>
              <linkbutton SRC='kata/thumbnails/seisan.png' NAME="Seisan" LNK="/resources/kata/karate/seisan" DESCRIPTION="" v-if="admin  || rank >=9 "/>
              <linkbutton SRC='kata/thumbnails/pinan-yondan.png' NAME="Pin'an Yondan" LNK="/resources/kata/karate/pin-an-yodan" DESCRIPTION="" v-if="admin  || rank >=9 "/>
              <linkbutton SRC='kata/thumbnails/passai-sho.png' NAME="Passai Sho" LNK="/resources/kata/karate/passai-sho" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='kata/thumbnails/pinan-godan.png' NAME="Pin-an Godan" LNK="/resources/kata/karate/pin-an-godan" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='kata/thumbnails/passai-dai.png' NAME="Passai Dai" LNK="/resources/kata/karate/passai-dai" DESCRIPTION="" v-if="admin  || rank >=11 "/>
              <linkbutton SRC='kata/thumbnails/nijushiho.png' NAME="Nijushiho" LNK="/resources/kata/karate/nijushiho" DESCRIPTION="" v-if="admin  || rank >=11 "/>
              <linkbutton SRC='kata/thumbnails/chinto.png' NAME="Chinto" LNK="/resources/kata/karate/chinto" DESCRIPTION="" v-if="admin  || rank >=12 "/>
              <linkbutton SRC='kata/thumbnails/jion.png' NAME="Jion" LNK="/resources/kata/karate/jion" DESCRIPTION="" v-if="admin  || rank >=12 "/>
              <linkbutton SRC='kata/thumbnails/gojushiho.png' NAME="Gojushiho" LNK="/resources/kata/karate/gojushiho" DESCRIPTION="" v-if="admin  || rank >=13 "/>
              <linkbutton SRC='kata/thumbnails/kusanku-dai.png' NAME="Kusanku" LNK="/resources/kata/karate/kusanku" DESCRIPTION="" v-if="admin  || rank >=14 "/>
              <linkbutton SRC='kata/thumbnails/rohai-sho.png' NAME="Rohai Sho" LNK="/resources/kata/karate/rohai-sho" DESCRIPTION="" v-if="admin  || rank >=15 "/>
          </div>
        </div>
      </article>
      <article >
        <h3 href="#osmkkf-kobudo" data-toggle="collapse" @click="osmkkfKobudo = !osmkkfKobudo">OSMKKF Kobudo Kata <span v-if="!osmkkfKobudo"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div class="container-fluid collapse" id="osmkkf-kobudo">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='kata/thumbnails/bo_shodan.png' NAME="Bo Shodan" LNK="/resources/kata/kobudo/bo-shodan" DESCRIPTION="" v-if="admin  || rank >=3 "/>
              <linkbutton SRC='kata/thumbnails/bo_nidan.png' NAME="Bo Nidan" LNK="/resources/kata/kobudo/bo-nidan" DESCRIPTION="" v-if="admin  || rank >=4 "/>
              <linkbutton SRC='kata/thumbnails/bo_jitsu.png' NAME="Bo Jitsu" LNK="/resources/kata/kobudo/bo-jitsu" DESCRIPTION="" v-if="admin  || rank >=5 "/>
              <linkbutton SRC='kata/thumbnails/bo_sandan.png' NAME="Bo Sandan" LNK="/resources/kata/kobudo/bo-sandan" DESCRIPTION="" v-if="admin  || rank >=8 "/>
              <linkbutton SRC='kata/thumbnails/shushi_no_kon_sho.png' NAME="Syushi no Kon Sho" LNK="/resources/kata/kobudo/syushi-no-kon-sho" DESCRIPTION="" v-if="admin  || rank >=9 "/>
              <linkbutton SRC='kata/thumbnails/bo_yondan.png' NAME="Bo Yondan" LNK="/resources/kata/kobudo/bo-yondan" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='kata/thumbnails/tokumine_no_kon.png' NAME="Tokumine no Kon" LNK="/resources/kata/kobudo/tokumine-no-kon" DESCRIPTION="" v-if="admin  || rank >=11 "/>
              <linkbutton SRC='kata/thumbnails/shushi_no_kon_dai.png' NAME="Syushi no Kon Dai" LNK="/resources/kata/kobudo/syushi-no-kon-dai" DESCRIPTION="" v-if="admin  || rank >=12 "/>
              <linkbutton SRC='kata/thumbnails/sakugawa_no_kon_sho.png' NAME="Sakugawa no Kon Sho" LNK="/resources/kata/kobudo/sakugawa-no-kon-sho" DESCRIPTION="" v-if="admin  || rank >=14 "/>
              <linkbutton SRC='kata/thumbnails/sakugawa_no_kon_dai.png' NAME="Sakugawa no Kon Dai" LNK="/resources/kata/kobudo/sakugawa-no-kon-dai" DESCRIPTION="" v-if="admin  || rank >=15 "/>
              <linkbutton SRC='kata/thumbnails/tsuken_sunakake_no_kon.png' NAME="Tsuken Sunakake no Kon" LNK="/resources/kata/kobudo/tsuken-sunakake-no-kon" DESCRIPTION="" v-if="admin  || rank >=15 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Hamahiga no Kon" LNK="/resources/kata/kobudo/hamahiga-no-kon" DESCRIPTION="" v-if="admin  || rank >=11 " />
              
              <linkbutton SRC='kata/thumbnails/sai_shodan.png' NAME="Sai Shodan" LNK="/resources/kata/kobudo/sai-shodan" DESCRIPTION="" v-if="admin  || rank >=5 "/>
              <linkbutton SRC='kata/thumbnails/sai_nidan.png' NAME="Sai Nidan" LNK="/resources/kata/kobudo/sai-nidan" DESCRIPTION="" v-if="admin  || rank >=6 "/>
              <linkbutton SRC='kata/thumbnails/sai_jitsu.png' NAME="Sai Jitsu" LNK="/resources/kata/kobudo/sai-jitsu" DESCRIPTION="" v-if="admin  || rank >=7 "/>
              <linkbutton SRC='kata/thumbnails/sai_sandan.png' NAME="Sai Sandan" LNK="/resources/kata/kobudo/sai-sandan" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='kata/thumbnails/hamahiga_no_sai.png' NAME="Hamahiga no Sai" LNK="/resources/kata/kobudo/hamahiga-no-sai" DESCRIPTION="" v-if="admin  || rank >=11 "/>
              <linkbutton SRC='kata/thumbnails/kama_shodan.png' NAME="Kama Shodan" LNK="/resources/kata/kobudo/kama-shodan" DESCRIPTION="" v-if="admin  || rank >=9 "/>
              <linkbutton SRC='kata/thumbnails/kama_nidan.png' NAME="Kama Nidan" LNK="/resources/kata/kobudo/kama-nidan" DESCRIPTION="" v-if="admin  || rank >=12 " />
              <linkbutton SRC='kata/thumbnails/hamahiga_no_kama.png' NAME="Hamahiga no Kama" LNK="/resources/kata/kobudo/hamahiga-no-kama" DESCRIPTION="" v-if="admin  || rank >=11"/>
              <linkbutton SRC='kata/thumbnails/tonfa_shodan.png' NAME="Tonfa Shodan" LNK="/resources/kata/kobudo/tonfa-shodan" DESCRIPTION="" v-if="admin  || rank >=11 " />
              <linkbutton SRC='osmkkf_logo.png' NAME="Tonfa Nidan" LNK="/resources/kata/kobudo/tonfa-nidan" DESCRIPTION="" v-if="admin  || rank >=12 " />
              <linkbutton SRC='osmkkf_logo.png' NAME="Tonfa Sandan" LNK="/resources/kata/kobudo/tonfa-sandan" DESCRIPTION="" v-if="admin  || rank >=12 " />
              <linkbutton SRC='kata/thumbnails/hamahiga_no_tonfa.png' NAME="Hamahiga no Tonfa" LNK="/resources/kata/kobudo/hamahiga-no-tonfa" DESCRIPTION="" v-if="admin  || rank >=12 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Tekko Kata" LNK="/resources/kata/kobudo/tekko-kata" DESCRIPTION="" v-if="admin  || rank >=13 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kise no Nitanbo" LNK="/resources/kata/kobudo/kise-no-nitanbo" DESCRIPTION="" v-if="admin  || rank >=4 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Soken no Nunchaku" LNK="/resources/kata/kobudo/soken-no-nunchaku" DESCRIPTION="" v-if="admin  || rank >=13 "/>
          
          </div>
        </div>
      </article>
      <article>
        <h3 href="#tan-ren" data-toggle="collapse" @click="tanren = !tanren">OSMKKF Tan Ren Kata  <span v-if="!tanren"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div class="container-fluid collapse" id="tan-ren">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='kata/thumbnails/gekisai-ichi.png' NAME="Gekisaidai Ichi" LNK="/resources/kata/tanren/gekisaidai-ichi" DESCRIPTION="" v-if="admin  || rank >=3 "/>
              <linkbutton SRC='kata/thumbnails/gekisai-ni.png' NAME="Gekisaidai Ni" LNK="/resources/kata/tanren/gekisaidai-ni" DESCRIPTION=""  v-if="admin  || rank >=4 "/>
              <linkbutton SRC='kata/thumbnails/wansu.png' NAME="Wansu" LNK="/resources/kata/tanren/wansu-tanren" DESCRIPTION=""  v-if="admin  || rank >=5 "/>
              <linkbutton SRC='kata/thumbnails/pinan-shodan.png' NAME="Pin'an Shodan" LNK="/resources/kata/tanren/pin-an-shodan-tanren" DESCRIPTION="" v-if="admin  || rank >=6 "/>
              <linkbutton SRC='kata/thumbnails/pinan-nidan.png' NAME="Pin'an Nidan" LNK="/resources/kata/tanren/pin-an-nidan-tanren" DESCRIPTION=""  v-if="admin  || rank >=7 "/>
              <linkbutton SRC='kata/thumbnails/ananko.png' NAME="Ananku" LNK="/resources/kata/tanren/ananku-tanren" DESCRIPTION=""  v-if="admin  || rank >=8 "/>
              <linkbutton SRC='kata/thumbnails/seisan.png' NAME="Seisan" LNK="/resources/kata/tanren/seisan-tanren" DESCRIPTION=""  v-if="admin  || rank >=10 "/>

          </div>
        </div>
      </article>
      <article>
        <h3 href="#external-karate" data-toggle="collapse" @click="karate = !karate">Non-Federation Karate Kata <span v-if="!karate"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div class="container-fluid collapse" id="external-karate">
          <div class="row justify-content-center text-center">
          </div>
        </div>
      </article>
      <article>
        <h3 href="#external-kobudo" data-toggle="collapse" @click="kobudo = !kobudo">Non-Federation Kobudo Kata <span v-if="!kobudo"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div class="container-fluid collapse" id="external-kobudo">
          <div class="row justify-content-center text-center">
            <linkbutton SRC='kata/thumbnails/fukyu_no_kon.png' NAME="Fukyu no Kon" LNK="/resources/kata/kobudo/fukyu-no-kon" DESCRIPTION="" v-if="admin  || rank >=3 "/>
            <linkbutton SRC='kata/thumbnails/chatan_yara_no_sai.png' NAME="Chatan Yara no Sai" LNK="/resources/kata/kobudo/chatan-yara-no-sai" DESCRIPTION="" v-if="admin  || rank >=10 "/>
            <linkbutton SRC='kata/thumbnails/kanegawa_no_tinbe.png' NAME="Kanegawa no Timbe" LNK="/resources/kata/kobudo/kanegawa-no-timbe" DESCRIPTION="" v-if="admin  || rank >=1 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Tokushin no Eku" LNK="/resources/kata/kobudo/tokushin-eku" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Chiken Bo" LNK="/resources/kata/kobudo/chiken-bo" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='kata/thumbnails/bokken_shodan.png' NAME="Bokken Shodan" LNK="/resources/kata/kobudo/bokken-shodan" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Tokushin no Nunti Bo" LNK="/resources/kata/kobudo/tokushin-no-nunti-bo" DESCRIPTION="" v-if="admin  || rank >=10 "/>
              <linkbutton SRC='osmkkf_logo.png' NAME="Kanegawa no Nichogama" LNK="/resources/kata/kobudo/kanegawa-no-nichogama" DESCRIPTION="" v-if="admin  || rank >=10 "/>
            </div>
        </div>
      </article>
      <article  v-if="admin ">
        <h3 href="#arnis-anyo" data-toggle="collapse" @click="arnis = !arnis">Arnis Anyo  <span v-if="!arnis"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/></svg></span><span v-else><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg></span></h3>
        <div class="container-fluid collapse" id="arnis-anyo" >
          <div class="row justify-content-center text-center">
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
  data() {
    return{
    osmkkfKarate : false,
    osmkkfKobudo : false,
    karate : false,
    kobudo : false,
    tanren : false,
    arnis : false,
    
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
      title: 'Kata | CMAA',
      meta: [
        { name: 'description', content: 'List of all kata' },
        
      ],
    
    }
  }
}
</script>