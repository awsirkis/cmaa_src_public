<template>
  <div>
    
    <main>
      <article>
        <h1>Video Resources</h1>
      </article>
      <div class="container fluid" v-if="!ready">
          <div class="row justify-content-center">
          <div class="loader"></div>

          </div>

      </div>
      <div class="container-fluid" v-else-if="!$route.query.id">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='kata/thumbnails/kata.png' NAME="Kata" LNK="/resources/kata" DESCRIPTION="Kata Videos In Order" />
              <linkbutton SRC='drills/thumbnails/drills.png' NAME="Drills" LNK="/resources/drills" DESCRIPTION="Drills from various martial arts"/>
              <linkbutton SRC='Ranks/kyu.png' NAME="Requirements" LNK="/resources/requirements" DESCRIPTION="Up-to-date rank requirements" />
              <linkbutton SRC="archive.png" NAME="Archive" LNK="/resources/archive" DESCRIPTION="Zoom Recordings" />
              <linkbutton SRC="osmkkf_logo.png" NAME="Instructor Pages" LNK="/resources/instructors" DESCRIPTION="OSMKKF Instructor Resources" v-if="$store.getters.role >= 1"/>
              <linkbutton v-for="item in videos.data" :key="`video-${item.id}`" :SRC="item.thumbnail" :NAME="item.title" :LNK="{path:'/resources', query:{id:item.id}}" :DESCRIPTION="item.description" @click="getVideo()"/>
          </div>
        </div>
        <div class="container-fluid" v-else-if="typeof(videos.data) == 'object'">
          <h2>{{videos.title}}</h2>
          <p>{{videos.description}}</p>
          <div class="row justify-content-center text-center">
            <linkbutton v-for="item in videos.data.filter(item=>rank >= item.kmin || admin)" :key="`video-${item.id}`" :SRC="item.thumbnail" :NAME="item.title" :LNK="{path:'/resources', query:{id:item.id}}" :DESCRIPTION="item.description" @click="getVideo()"/>
          </div>
        </div>
        <div v-else>
          <h2>{{videos.title}}</h2>
          <p>{{videos.description}}</p>
          <video>
            <source :src="videos.data" type="video/mp4">
          </video>
        </div>
    </main>
    
  </div>
</template>

<script>
import linkbutton from '~/components/linkbutton.vue'
export default {
  watchQuery: ['id'],
  data(){
    return{
      videos: [],
      ready: false,
      rank: 0,
      admin: 0
    }
  },
  components: {
    linkbutton
  },
  async mounted(){
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
    this.rank = this.$store.getters.rankKarate.length
    this.admin = this.$store.getters.role >= 4
  },
  head () {
    return {
      title: 'Instructor Resources | CMAA',
      meta: [
        { name: 'description', content: '' },
        
      ],
    
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  async fetch(){
    if(!this.$route.query.id)
      await this.getVideos()
    else
      await this.getVideo()
  },
  methods:{
    async getVideos(){
        const fetch = require('node-fetch')
        const params = {
            action:'getAll'
        }
        const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
        let json = await res.json()
        for(let i = 0; i < json.data.length; ++i){
          let p = {
            action: 'getVideo',
            id: json.data[i]
          }
          let r = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(p)})
          let j = await r.json()
          json.data[i] = j
        }
        this.videos=json
        this.ready = true
    },
    async getVideo(){
      this.ready = false
      const fetch = require('node-fetch')
        const params = {
            action:'getVideo',
            id: this.$route.query.id
        }
        const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
        let json = await res.json()
        console.log(json)
        if(json.data != null && typeof(json.data)=='object'){
          for(let i = 0; i < json.data.length; ++i){
            let p = {
              action: 'getVideo',
              id: json.data[i]
            }
            let r = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(p)})
            let j = await r.json()
            json.data[i] = j
          }
        }
        console.log(json)
        this.videos=json
        this.ready = true
    }
  }
}
</script>
