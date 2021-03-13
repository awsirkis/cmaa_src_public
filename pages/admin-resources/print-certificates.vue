<template>
<main>
    
    <div class="container fluid" v-if="!ready">
        <div class="row justify-content-center">
        <div class="loader"></div>

        </div>

    </div>
    <div v-else-if="!$route.query.username">
        <h1>Select Student</h1>
        <select class="form-control" @change="select" v-model="ind">
            <option v-for="(item, index) in users" :key="index" :value="index">{{item.name}}</option>
        </select>
    </div>
    <div v-else>
        <button class="btn-secondary btn" @click="$router.push({path: $router.path, query:{username:undefined}})">🞀 Back</button>
        <h1>Customize Certificate</h1>
        <div id="certificate" style="">
            <p id="printer-name" style="">{{user?user.name:""}}<br>
            <span id="printer-kana" style="">{{user?user.kana:""}}</span></p>
            <p id="printer-body" style="">Has presented themself this day before the examination board of the Okinawa Shorin-ryu Matsumura Karate and Kobudo Federation for advancement testing and having honorably and satisfactory demonstrated proficiency is hereby formally promoted to the grade of:
            <br>
            <span id="printer-rank" style="">{{rank}}</span>
            <br>
            <span id="printer-onthis" style="">On This</span>
            <br>
            <span id="printer-date" style="">{{date}}</span></p>
            <p id="printer-seal" style="">MEMBER  OF:<br> THE OKINAWA SHORINRYU MATSUMURA SEITO KARATE &amp; KOBUDO FEDERATION &amp; PARRA ACADEMY OF KALI/ SILAT JUN FAN MARTIAL ARTS</p>
            <p id="printer-signature" style="">Rick A Vogt Sensei <br>Chief Instructor</p>
        </div>
        <div id="controls">
            <h4>Click for Junior Grade</h4>
            <label class="switch">
                <input type="checkbox" v-model="jr">
                <span class="slider round"></span>
            </label>
            <input type="date" class="form-control" v-model="dateraw">
            <button class="btn btn-primary" onclick="window.print()">Print Certificate</button>
        </div>
    </div>
    <!--<a :href="`/certificate.html?name=${name}&kana=${kana}&rank=${rank}&date=${date}`" class="btn btn-primary">Print Me As Well</a>-->
</main>
</template>

<script>
export default {
    data() {
        return{
            user: null,
            ind: null,
            jr: false,
            users:[],
            dateraw: new Date(),
            ready: false
        }
    },
    async mounted(){
        if(!this.$store.getters.isAuth && this.$store.getters.role < 4){
            this.$router.push('/')
        }
        let instance = this
        if(this.$route.query.username){
            await this.fetchUser()
        }
        else{
            await this.fetchUsers()
        }
    },
    methods:{
        async fetchUser(){
            const fetch = require('node-fetch')
            const params={
                action:'adminGetUser',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.$route.query.username
            }
            const res = await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            this.user = await res.json()
            this.ready = true
        },
        async fetchUsers(){
            const fetch = require('node-fetch')
            const params={
                action:'list',
                username: this.$store.getters.username,
                password: this.$store.getters.password
            }
            const res = await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            const users = await res.json()
            this.users = users
            this.ready = true
        },
        async select(){
            this.$router.push("/admin-resources/print-certificates?username=" + this.users[this.ind].username)
            this.user=this.users[this.ind]
            
        }
    },
    computed:{
        rank: function(){
            if(this.user == null)
                return null
            let today = new Date(this.dateraw)
            let birthday = new Date(this.user.birthdate)
            let years = today.getFullYear() - birthday.getFullYear()
            this.junior = years < 16
            var myMap = new Map();
            myMap.set(undefined, '10th Kyu')
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
            return String(myMap.get(parseInt(this.user.karate_rank.length)) + (this.jr ? " Jr" : ''))
        },
        date: function(){
            let d = null
            if(this.dateraw == null)
                d = new Date()
            else
                d = new Date(this.dateraw)
            let sd = ''
            sd += d.getDate()
            switch(d.getDate()){
                case 1:
                case 21:
                case 31:
                    sd+="st"
                    break
                case 2:
                case 22:
                    sd +="nd"
                    break
                case 3:
                case 33:
                    sd +="rd"
                    break
                default:
                    sd+="th"
            }
            sd += ' Day of '
            switch(d.getMonth()){
                case 0:
                    sd += "January, "
                    break
                case 1: 
                    sd += "February, "
                    break
                case 2:
                    sd += "March, "
                    break
                case 3:
                    sd += "April, "
                    break
                case 4:
                    sd += "May, "
                    break
                case 5:
                    sd += "June, "
                    break
                case 6:
                    sd += "July, "
                    break
                case 7:
                    sd += "August, "
                    break
                case 8:
                    sd += "September, "
                    break
                case 9: 
                    sd += "October, "
                    break
                case 10:
                    sd += "November, "
                    break
                case 11: 
                    sd += "December, "
                    break
            }
            sd += d.getFullYear()
            return sd
        }
    },
    head(){
        return{
            title: 'Print Certificates | CMAA',
            meta: [
                { name: 'description', content: 'Print Rankup Certificates' }, 
            ]
        }
    }
}
</script>

<style>
#certificate{
    position:relative;text-align:center;color:black;font-weight:bolder;text-decoration:none;border: none;background-color: white;padding:15px;width:10.25in;height:7.875in;background:url('/certificate-background.png') no-repeat;
    -moz-background-size:10.25in 7.875in;
-webkit-background-size:10.25in 7.875in;
background-size:10.25in 7.875in;
}
#printer-name{
    
    position:absolute;
    font-family: 'Times New Roman', Times, serif;
    font-size:32pt;
    width:11in;
    text-align:center;
    top:3in;
    left:5.125in;
    transform: translate(-50%, -50%);
}
#printer-kana{
    font-family: 'MS Mincho','ＭＳ Ｐゴシック', 'MS PGothic', 'メイリオ', Meiryo, sans-serif;
    font-size:28pt;
    text-align:center;
    width:11in;
}
#printer-body{
    position:absolute;
    font-family:'Palatino Linotype', Times, serif;
    font-size:14pt;
    text-align: center;
    width:6.75in;
    top:4.865in;
    left:5.125in;
    transform: translate(-50%, -50%);
}
#printer-rank{
    font-family:'Palatino Linotype', Times, serif;
    font-size:24pt;
}
#printer-onthis{
    font-family:'Palatino Linotype', Times, serif;
    font-size:14pt;
}
#printer-date{
    font-family:'Palatino Linotype', Times, serif;
    font-size:18pt
}
#printer-seal {
    position:absolute;
    border: none;
    text-align:left;
    font-family:Arial, Helvetica, sans-serif;
    font-size:9pt;
    width:1.9in;
    height: 1.5in;
    top:6.875in;
    left:2.875in;
    transform: translate(-50%, -50%);
}
#printer-signature{
    position:absolute;
    font-family:'Times New Roman', Times, serif;
    font-size: 10pt;
    width:2.75in;
    text-align:center;
    top:7.25in;
    left:5.2in;
    transform: translate(-50%, -50%);
}

@media print{
      ::-webkit-scrollbar{
    display: none !important;
  }
    header, footer, #controls, button, h1, .btn{
        display: none;
        background-color: white;
        
    }
    body, html, div{
        margin:0;
        padding:0;
        height:8.5in;
        width:11in;
    }
    #certificate {
        display: block;
        position:absolute;
        padding:0;
        margin:0;
        top:0.375in;
        left:0.5in;
        height:8in;
        width:10.5in;
    }
    main{
        background-color: white;
        height:8.5in;
        width:11in;
        margin:0;
        padding:0;
    }
    * {-webkit-print-color-adjust:exact;}
    @page{
        size: landscape;
    }
}
header footer #controls{
    display:none;
}
	.confbox
	{
		visibility:hidden;
		width:300px;height:300px;
		z-index:999;
		position:absolute;
		display:block;
		top:30%;
		left:30%;
	}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #B22222;
}

input:focus + .slider {
  box-shadow: 0 0 1px #B22222;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid rgb(241, 94, 94); /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>