<template>
  <div>
    
    <main>
      <h1>Profile</h1>
      <article v-if="$store.getters.isAuth">
        <p><b>Username:</b> {{$store.getters.username}}</p>
        <div class='col-12'>
          <p><b>Name:</b> <span v-if="!SHOWNAME">{{NAME}}     <a @click="SHOWNAME = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="NAME"></p>
          <button class="btn btn-danger" @click="name" v-if="SHOWNAME">Confirm Change</button>
        </div>
        <div class='col-12'>
          <p><b>Password:</b> <span v-if="!SHOWPASS"> <a @click="SHOWPASS = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="PASSWORD"></p>
          <button class="btn btn-danger" @click="password" v-if="SHOWPASS">Confirm Change</button>
        </div>
        <div class="col-12">
            <p><b>Phone Number:</b> <span v-if="!SHOWPHONE">{{PHONE}}<a @click="SHOWPHONE = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="PHONE"></p>
            <button class="btn btn-danger" @click="phone" v-if="SHOWPHONE">Confirm Change</button>
        </div>
        <div class="col-12">
            <p><b>Email:</b> <span v-if="!SHOWEMAIL">{{EMAIL}}<a @click="SHOWEMAIL = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="EMAIL"></p>
            <button class="btn btn-danger" @click="email" v-if="SHOWEMAIL">Confirm Change</button>
        </div>
        <div v-if="$store.getters.rankKarate">
          <p><b>Karate Rank:</b> {{krank}}</p>
          <div class="list-group">
            <nuxt-link :to="`${item.link}`" v-for="item in karateRequirements" :key="item.name" class="list-group-item list-group-item-action">{{item.name}}</nuxt-link>
          </div>
        </div>
        <p v-if="$store.getters.parraRank"><b>Parra Rank:</b> {{prank}}</p>
      </article>
    </main>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      karateRequirements:[],
      SHOWNAME: false,
      SHOWPASS: false,
      SHOWPHONE: false,
      SHOWEMAIL: false,
      NAME: null,
      PASSWORD: null,
      EMAIL: null,
      PHONE: null
    }
  },
  mounted(){
    if(!this.$store.getters.isAuth){
      this.$router.push('/profile/login')
    }
    var myMap = new Map();
    myMap.set(1,[{name: 'Fukyukata Ichi',link:'/resources/kata/karate/fukyukata-ichi'},{name:'10th Kyu Tuite',link:'/resources/drills/osmkkf/tuite/10-kyu-tuite'},{name:'White Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/white-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'}])
    myMap.set(2,[{name: 'Fukyukata Ni',link:'/resources/kata/karate/fukyukata-ni'},{name:'9th Kyu Tuite',link:'/resources/drills/osmkkf/tuite/9-kyu-tuite'},{name:'Blue Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/blue-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'},{name:'Koteatei Set #1',link:'/resources/drills/osmkkf/koteatei/1'}])
    myMap.set(3,[{name: 'Fukyukata San',link:'/resources/kata/karate/fukyukata-san'},{name:'8th Kyu Tuite',link:'/resources/drills/osmkkf/tuite/8-kyu-tuite'},{name:'Blue Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/blue-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'},{name:'Bo Basics',link:'/resources/drills/osmkkf/basics/bo'}])
    myMap.set(4,[{name: 'Wansu',link:'/resources/kata/karate/wansu'},{name: 'Bo Shodan',link:'/resources/kata/kobudo/bo-shodan'},{name:'7th Kyu Tuite',link:'/resources/drills/osmkkf/tuite/7-kyu-tuite'},{name:'Blue Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/blue-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'}])
    myMap.set(5,[{name: 'Pin\'an Shodan',link:'/resources/kata/karate/pin-an-shodan'},{name: 'Bo Nidan',link:'/resources/kata/kobudo/bo-nidan'},{name:'6th Kyu Tuite',link:'/resources/drills/osmkkf/tuite/6-kyu-tuite'},{name:'Green Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/green-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'},{name:'Sai Basics',link:'/resources/drills/osmkkf/basics/sai'}])
    myMap.set(6,[{name: 'Pin\'an Nidan',link:'/resources/kata/karate/pin-an-nidan'},{name: 'Bo Jitsu',link:'/resources/kata/kobudo/bo-jitsu'},{name: 'Sai Shodan',link:'/resources/kata/kobudo/sai-shodan'},{name:'5th Kyu Tuite',link:'/resources/drills/osmkkf/tuite/5-kyu-tuite'},{name:'Green Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/green-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'},{name:'Koteatei Set #2',link:'/resources/drills/osmkkf/koteatei/2'},{name:'Bo tai Bo Set #2',link:'/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-2'}])
    myMap.set(7,[{name: 'Naihanchi Shodan',link:'/resources/kata/karate/naihanchi-shodan'},{name: 'Pin\'an Sandan',link:'/resources/kata/karate/pin-an-sandan'},{name: 'Sai Nidan',link:'/resources/kata/kobudo/sai-nidan'},{name:'4th Kyu Tuite',link:'/resources/drills/osmkkf/tuite/4-kyu-tuite'},{name:'Green Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/green-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'}])
    myMap.set(8,[{name: 'Naihanchi Nidan',link:'/resources/kata/karate/naihanchi-nidan'},{name: 'Ananku',link:'/resources/kata/karate/ananku'},{name: 'Sai Jitsu',link:'/resources/kata/kobudo/sai-jitsu'},{name:'3rd Kyu Tuite',link:'/resources/drills/osmkkf/tuite/3-kyu-tuite'},{name:'Brown Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/brown-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'},{name:'Bo tai Bo Set #3',link:'/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-3'}])
    myMap.set(9,[{name: 'Naihanchi Sandan',link:'/resources/kata/karate/naihanchi-sandan'},{name: 'Bo Sandan',link:'/resources/kata/kobudo/bo-sandan'},{name:'2nd Kyu Tuite',link:'/resources/drills/osmkkf/tuite/2-kyu-tuite'},{name:'Brown Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/brown-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'},{name:'Kama Basics',link:'/resources/drills/osmkkf/basics/kama'},{name:'Koteatei Set #3',link:'/resources/drills/osmkkf/koteatei/3'}])
    myMap.set(10,[{name: 'Pian\'an Yondan',link:'/resources/kata/karate/pin-an-yondan'},{name: 'Seisan',link:'/resources/kata/karate/seisan'},{name: 'Kama Shodan',link:'/resources/kata/kobudo/kama-shodan'},{name: 'Syushi no Kon Sho',link:'/resources/kata/kobudo/syushi-no-kon-sho'},{name:'1st Kyu Tuite',link:'/resources/drills/osmkkf/tuite/1-kyu-tuite'},{name:'Brown Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/brown-belt-ippon-kumite'},{name:'25 Basics',link:'/resources/drills/osmkkf/basics/kyu-rank'}])
    myMap.set(11,[{name: 'Passai Sho',link:'/resources/kata/karate/passai-sho'},{name: 'Pin\'an Godan',link:'/resources/kata/karate/pin-an-godan'},{name: 'Bo Yondan',link:'/resources/kata/kobudo/bo-yondan'},{name: 'Sai Sandan',link:'/resources/kata/kobudo/sai-sandan'},{name:'1st Dan Tuite',link:'/resources/drills/osmkkf/tuite/1-dan-tuite'},{name:'Black Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite'},{name:'Black Belt Basics',link:'/resources/drills/osmkkf/basics/blackbelt'},{name:'Tonfa Basics',link:'/resources/drills/osmkkf/basics/tonfa'}])

    myMap.set(12,[{name: 'Passai Dai',link:'/resources/kata/karate/passai-dai'},{name: 'Nijushiho',link:'/resources/kata/karate/nijushiho'},{name: 'Tokumine no Kon',link:'/resources/kata/kobudo/tokumine-no-kon'},{name: 'Tonfa Shodan',link:'/resources/kata/kobudo/tonfa-shodan'},{name:'2nd Dan Tuite',link:'/resources/drills/osmkkf/tuite/2-dan-tuite'},{name:'Black Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite'},{name:'Black Belt Basics',link:'/resources/drills/osmkkf/basics/blackbelt'}])
    myMap.set(13,[{name: 'Chinto',link:'/resources/kata/karate/chinto'},{name: 'Jion',link:'/resources/kata/karate/jion'},{name: 'Kama Nidan',link:'/resources/kata/kobudo/kama-nidan'},{name: 'Syushi no Kon Dai',link:'/resources/kata/kobudo/syushi-no-kon-dai'},{name:'3rd Dan Tuite',link:'/resources/drills/osmkkf/tuite/3-dan-tuite'},{name:'Black Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite'},{name:'Black Belt Basics',link:'/resources/drills/osmkkf/basics/blackbelt'}])
    myMap.set(14,[{name: 'Gojushiho',link:'/resources/kata/karate/gojushiho'},{name: 'Soken no Nunchaku',link:'/resources/kata/kobudo/soken-no-nunchaku'},{name: 'Tekko Kata',link:'/resources/kata/kobudo/tekko-kata'},{name:'Black Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite'},{name:'Black Belt Basics',link:'/resources/drills/osmkkf/basics/blackbelt'}])
    myMap.set(15,[{name: 'Kusanku',link:'/resources/kata/karate/kusanku'},{name: 'Sakugawa no Kon Sho',link:'/resources/kata/kobudo/sakugawa-no-kon-sho'},{name:'Black Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite'},{name:'Black Belt Basics',link:'/resources/drills/osmkkf/basics/blackbelt'}])
    myMap.set(16,[{name: 'Rohai Sho',link:'/resources/kata/karate/rohai-sho'},{name: 'Sakugawa no Kon Dai',link:'/resources/kata/kobudo/sakugawa-no-kon-dai'},{name:'Black Belt Ippon Kumite',link:'/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite'},{name:'Black Belt Basics',link:'/resources/drills/osmkkf/basics/blackbelt'}])
    this.karateRequirements = myMap.get(parseInt(this.$store.getters.rankKarate))

    this.NAME = this.$store.getters.name
    this.EMAIL = this.$store.getters.email
    this.PHONE = this.$store.getters.phone
  },
  head () {
    return {
      title: 'Profile | CMAA',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { name: 'description', content: 'View logged-in profile' },
      ]
    }
  },
  computed:{
    krank:function(){
            let KARATERANKNUM=this.$store.getters.rankKarate
            var myMap = new Map();
            myMap.set(1, '10th Kyu')
            myMap.set(2, '9th Kyu')
            myMap.set(3, '8th Kyu')
            myMap.set(4, '7th Kyu')
            myMap.set(5, '6th Kyu')
            myMap.set(6, '5th Kyu')
            myMap.set(7, '4th Kyu')
            myMap.set(8, '3rd Kyu')
            myMap.set(9, '2nd Kyu')
            myMap.set(10, '1st Kyu')
            myMap.set(11, '1st Dan')
            myMap.set(12, '2nd Dan')
            myMap.set(13, '3rd Dan')
            myMap.set(14, '4th Dan')
            myMap.set(15, '5th Dan')
            myMap.set(16, '6th Dan')
            myMap.set(17, '7th Dan')
            return myMap.get(parseInt(KARATERANKNUM))

    },
    prank: function(){
      
            let PARRARANKNUM=this.$store.getters.parraRank
            var myMap = new Map();
            myMap.set(0, 'Unranked')
            myMap.set(1, 'Phase I Level I')
            myMap.set(2, 'Phase I Level II')
            myMap.set(3, 'Phase I Level III')
            myMap.set(4, 'Phase II Level I')
            myMap.set(5, 'Phase II Level II')
            myMap.set(6, 'Phase II Level III')
            myMap.set(7, 'Phase III Level I')
            myMap.set(8, 'Phase III Level II')
            myMap.set(9, 'Phase III Level III')
            myMap.set(10, 'Phase IV Level I')
            myMap.set(11, 'Phase IV Level II')
            myMap.set(12, 'Phase IV Level III')
            myMap.set(13, 'Phase V Level I')
            myMap.set(14, 'Phase V Level II')
            myMap.set(15, 'Phase V Level III')
            return myMap.get(parseInt(PARRARANKNUM))
    }
  },
  methods:{
    async name(){
            
            const fetch = require('node-fetch')
            const params={
                action:'name',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                name: this.NAME
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWNAME = false
        },
        async password(){
            
            const fetch = require('node-fetch')
            const params={
                action:'password-change',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                new_pass: this.PASSWORD
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWPASS = false
        },
    async email(){
            const fetch = require('node-fetch')
            const params={
                action:'email',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                email: this.EMAIL
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWMEAIL = false
        },
        async phone(){
            const fetch = require('node-fetch')
            console.log(this.PHONE)
            const params={
                action:'phone',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                phone: this.PHONE
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWPHONE = false
        },
        async login(){
          const fetch = require('node-fetch')
          const params={
              action:'signin',
              username: this.$store.getters.username,
              password: this.$store.getters.password
          }
          const res = await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
          const user = await res.json()
          this.$store.dispatch('login', {user: user})
          this.$store.dispatch('storePass',{pass: this.password})
          this.$router.push('/profile')
        },
  }
}
</script>
