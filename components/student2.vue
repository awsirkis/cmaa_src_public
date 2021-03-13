<template>
<div>
    <h3>{{NAME}} - {{ID}}</h3>
    <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
                <img alt="image" class="headshot" :src="IMAGE" style=" width:100%" v-if="!SHOWIMAGE">
                <a @click="SHOWIMAGE = true" class="a" v-if="!SHOWIMAGE"> Edit</a>
                <div style="width: 100%" v-else>
                    <button class="btn btn-danger" @click="image" v-if="SHOWIMAGE">Confirm Change</button>
                    <input type="file" class="form-control" name="profile" @change="preview" required>
                    <img id="preview" src="" alt="preview" style=" width:100%">
                    
                </div>
            </div>
            <div class="row col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                <div class='col-12'>
                    <p>Name: <span v-if="!SHOWNAME">{{NAME}}     <a @click="SHOWNAME = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="NAME"></p>
                    <button class="btn btn-danger" @click="name" v-if="SHOWNAME">Confirm Change</button>
                    </div>
                <div class="col-12">
                    <p>Kana: <span v-if="!SHOWKANA">{{KANA}}<a @click="SHOWKANA = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="KANA"></p>
                    <button class="btn btn-danger" @click="kana" v-if="SHOWKANA">Confirm Change</button>
                    </div>
                <div class="col-12">
                    <p>Username: {{USERNAME}}</p>
                    </div>
                <div class="col-12">
                    <p>Password: <a @click="password" class="a">Send Reset Email</a></p>
                    </div>
                <div class="col-12">
                    <p>Phone Number: <span v-if="!SHOWPHONE">{{PHONE}}<a @click="SHOWPHONE = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="PHONE"></p>
                    <button class="btn btn-danger" @click="phone" v-if="SHOWPHONE">Confirm Change</button>
                    </div>
                <div class="col-12">
                    <p>Email: <span v-if="!SHOWEMAIL">{{EMAIL}}<a @click="SHOWEMAIL = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="EMAIL"></p>
                    <button class="btn btn-danger" @click="email" v-if="SHOWEMAIL">Confirm Change</button>
                    </div>
                <div class="col-12">
                    <p>Birthday: <span v-if="!SHOWBDAY">{{BIRTHDAY}}<a @click="SHOWBDAY = true" class="a"> Edit</a></span><input v-else type='text' class="form-control" v-model="BIRTHDAY"></p>
                    <button class="btn btn-danger" @click="birthday" v-if="SHOWBDAY">Confirm Change</button>
                    </div>
                <div class="col-12">
                    <h4>Enabled: {{ENABLED}}</h4>
                    
                    <label class="switch">
                        <input type="checkbox" v-model="ENABLED" @change="enabled">
                        <span class="slider round"></span>
                    </label>
                    </div>
                <div class="col-12">
                    <p>Last Date Used: {{ACCESSED}}</p>
                    </div>
                <div class="row col-12">
                    <h4 class="col-12">Karate Ranks <a class="a" @click="SHOWKARATE = true" v-if="!SHOWKARATE"> Edit</a></h4>
                    
                    <p class="col-12">Next Promotion: {{nextPromotion}}</p>
                    <table class="col-12">
                    <tbody>
                        <tr v-for="(item, index) in KARATE" :key="index+`-karaterank`">
                            <td>{{KARATE_RANKS[index].rank}}</td>
                            <td v-if="!SHOWKARATE">{{item}}</td>
                            <td v-else><input type="text" v-model="KARATE[index]" class="form-control"></td>
                        </tr>
                    </tbody>
                    </table>
                    <button v-if="SHOWKARATE" class="btn btn-secondary col-4" @click="demoteKarate">Demote</button>
                    <button v-if="SHOWKARATE" class="btn btn-danger col-4" @click="confirmKarate">Confirm Change</button>
                    <button v-if="SHOWKARATE" class="btn btn-secondary col-4" @click="promoteKarate">Promote</button>
                </div>
                <div class="row col-12">
                    <h4 class="col-12">Karate Instructor Levels</h4>
                    <table class="col-12">
                        <tbody>
                            <tr>
                                <td>Karate Instructor</td>
                                <td v-if="!SHOWINSTRUCTORKARATE">{{KARATE_INSTRUCTOR ? KARATE_INSTRUCTOR : "Not Yet Received"}}</td>
                                <td v-else><input type="text" v-model="KARATE_INSTRUCTOR" class="form-control"></td>
                                <td v-if="!SHOWINSTRUCTORKARATE"><a class="a" @click="SHOWINSTRUCTORKARATE = true">Edit</a></td>
                                <td v-else><button class="btn btn-danger" @click="instructorKarate">Confirm Change</button></td>
                            </tr>
                            <tr>
                                <td>Kobudo Instructor</td>
                                <td v-if="!SHOWINSTRUCTORKOBUDO">{{KOBUDO_INSTRUCTOR ? KOBUDO_INSTRUCTOR : "Not Yet Received"}}</td>
                                <td v-else><input type="text" v-model="KOBUDO_INSTRUCTOR" class="form-control"></td>
                                <td v-if="!SHOWINSTRUCTORKOBUDO"><a class="a" @click="SHOWINSTRUCTORKOBUDO = true">Edit</a></td>
                                <td v-else><button class="btn btn-danger" @click="instructorKobudo">Confirm Change</button></td>
                            </tr>
                            <tr>
                                <td>Tuite Instructor</td>
                                <td v-if="!SHOWINSTRUCTORTUITE">{{TUITE_INSTRUCTOR ? TUITE_INSTRUCTOR : "Not Yet Received"}}</td>
                                <td v-else><input type="text" v-model="TUITE_INSTRUCTOR" class="form-control"></td>
                                <td v-if="!SHOWINSTRUCTORTUITE"><a class="a" @click="SHOWINSTRUCTORTUITE = true">Edit</a></td>
                                <td v-else><button class="btn btn-danger" @click="instructorTuite">Confirm Change</button></td>
                            </tr>
                            <tr>
                                <td>Law Enforcement Instructor</td>
                                <td v-if="!SHOWINSTRUCTORLAW">{{LAW_INSTRUCTOR ? LAW_INSTRUCTOR : "Not Yet Received"}}</td>
                                <td v-else><input type="text" v-model="LAW_INSTRUCTOR" class="form-control"></td>
                                <td v-if="!SHOWINSTRUCTORLAW"><a class="a" @click="SHOWINSTRUCTORLAW = true" >Edit</a></td>
                                <td v-else><button class="btn btn-danger" @click="instructorLaw">Confirm Change</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
                <div class="col-12 row">
                    <h4 class="col-12">Honorary Titles</h4>
                    <table class="col-12">
                        <tbody>
                            <tr>
                                <td>Renshi</td>
                                <td v-if="!SHOWHONORARY">{{HONORARY[0] ? HONORARY[0] : "Not Yet Received"}}</td>
                                <td v-else><input type="text" v-model="HONORARY[0]" class="form-control"></td>
                                <td v-if="!SHOWHONORARY"><a class="a" @click="SHOWHONORARY = true">Edit</a></td>
                                <td v-else><button class="btn btn-danger" @click="instructorKarate">Confirm Change</button></td>
                            </tr>
                            <tr>
                                <td>Shihan</td>
                                <td v-if="!SHOWHONORARY">{{HONORARY[1] ? HONORARY[1] : "Not Yet Received"}}</td>
                                <td v-else><input type="text" v-model="HONORARY[1]" class="form-control"></td>
                                <td v-if="!SHOWHONORARY"><a class="a" @click="SHOWHONORARY = true">Edit</a></td>
                                <td v-else><button class="btn btn-danger" @click="instructorKarate">Confirm Change</button></td>
                            </tr>
                            <tr>
                                <td>Hanshi</td>
                                <td v-if="!SHOWHONORARY">{{HONORARY[2] ? HONORARY[2] : "Not Yet Received"}}</td>
                                <td v-else><input type="text" v-model="HONORARY[2]" class="form-control"></td>
                                <td v-if="!SHOWHONORARY"><a class="a" @click="SHOWHONORARY = true">Edit</a></td>
                                <td v-else><button class="btn btn-danger" @click="instructorKarate">Confirm Change</button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="col-12 row">
                    <h4 class="col-12">Parra Ranks <a class="a" @click="SHOWPARRA = true" v-if="!SHOWPARRA"> Edit</a></h4>
                    <table class="col-12">
                    <tbody>
                        <tr v-for="(item, index) in PARRA" :key="index+`-parrarank`">
                            <td>{{PARRA_RANKS[index]}}</td>
                            <td v-if="!SHOWPARRA">{{item}}</td>
                            <td v-else><input type="text" v-model="PARRA[index]" class="form-control"></td>
                        </tr>
                    </tbody>
                    </table>
                    <button v-if="SHOWPARRA" class="btn btn-secondary col-4" @click="demoteParra">Demote</button>
                    <button v-if="SHOWPARRA" class="btn btn-danger col-4" @click="confirmParra(); SHOWPARRA=false">Confirm Change</button>
                    <button v-if="SHOWPARRA" class="btn btn-secondary col-4" @click="promoteParra">Promote</button>
                </div>
                <div class="col-12 row">
                    <h4 class="col-12">Parra Instructor Levels <a class="a" @click="SHOWINSTRUCTORPARRA = true" v-if="!SHOWINSTRUCTORPARRA"> Edit</a></h4>
                    <table class="col-12">
                    <tbody>
                        <tr v-for="(item, index) in PARRA_INSTRUCTOR" :key="index+`-instructor`">
                            <td>{{PARRA_LEVELS[index]}}</td>
                            <td v-if="!SHOWINSTRUCTORPARRA">{{item ? item : "Not Yet Received"}}</td>
                            <td v-else><input type="text" v-model="PARRA_INSTRUCTOR[index]" class="form-control"></td>
                        </tr>
                    </tbody>
                    </table>
                    <button v-if="SHOWINSTRUCTORPARRA" class="btn btn-secondary col-4" @click="demoteParraInstructor">Demote</button>
                    <button v-if="SHOWINSTRUCTORPARRA" class="btn btn-danger col-4" @click="confirmParraInstructor">Confirm Change</button>
                    <button v-if="SHOWINSTRUCTORPARRA" class="btn btn-secondary col-4" @click="promoteParraInstructor">Promote</button>
                </div>
                <div class="col-12 row">
                    <h4 class="col-12">Account Roles</h4>
                    <table class="col-12">
                        <tbody>
                            <tr v-for="(item, index) in ROLE" :key="index+'-role'">
                                <td><p>{{ROLE_LIST[index]}}</p></td>
                                <label class="switch">
                                    <input type="checkbox" v-model="ROLE[index]" @change="roles">
                                    <span class="slider round"></span>
                                </label>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row col-12">
                    <h4 class="col-12">DELETE USER</h4>
                    <p class="col-12">Cannot be undone <button @click="deleteUser" class="btn btn-danger">DELETE USER</button></p>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'student',
    async mounted(){
        if(this.USER == null){
            await this.getUser()
        }
        else{
            this.ID = this.USER.id
            this.NAME = this.USER.name
            this.KARATE = this.USER.karate_rank
            this.PARRA = this.USER.parra_rank
            this.PHONE = this.USER.phone
            this.EMAIL = this.USER.email
            this.IMAGE = this.USER.image
            this.USERNAME = this.USER.username
            let i = this.USER.role
            let arr = []
            arr.push(i % 2)
            arr.push((i >> 1) % 2 )
            arr.push((i >> 2) % 2 )
            this.ROLE = arr
            this.PARRA_INSTRUCTOR = this.USER.instructorParra
            this.KARATE_INSTRUCTOR = this.USER.instructorKarate
            this.KOBUDO_INSTRUCTOR = this.USER.instructorKobudo
            this.TUITE_INSTRUCTOR = this.USER.instructorTuite
            this.LAW_INSTRUCTOR = this.USER.instructorLaw
            this.HONORARY = this.USER.honorary
            this.ENABLED = this.USER.enabled
            this.ACCESSED = this.USER.accessed
            this.BIRTHDAY = this.USER.birthdate
            this.KANA = this.USER.kana
        }
    },
    methods:{
        async getUser(){
            const fetch = require('node-fetch')
            const params={
                action:'adminGetUser',
                    username: this.$store.getters.username,
                    password: this.$store.getters.password,
                user: this.$route.query.username

            }
            const res = await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            const user = await res.json()
            this.ID = user.id
            this.NAME = user.data.name
            this.KARATE = user.data.karate_rank
            this.PARRA = user.data.parra_rank
            this.PHONE = user.data.phone
            this.EMAIL = user.data.email
            this.IMAGE = user.data.image
            this.USERNAME = user.data.username
            let i = user.data.role
            let arr = []
            arr.push(i % 2)
            arr.push((i >> 1) % 2 )
            arr.push((i >> 2) % 2 )
            this.ROLE = arr
            this.PARRA_INSTRUCTOR = user.data.instructorParra
            this.KARATE_INSTRUCTOR = user.data.instructorKarate
            this.KOBUDO_INSTRUCTOR = user.data.instructorKobudo
            this.TUITE_INSTRUCTOR = user.data.instructorTuite
            this.LAW_INSTRUCTOR = user.data.instructorLaw
            this.HONORARY = user.data.honorary
            this.ENABLED = user.data.enabled
            this.ACCESSED = user.data.accessed
            this.BIRTHDAY = user.data.birthdate
            this.KANA = user.data.kana
        },
        async name(){
            
            const fetch = require('node-fetch')
            const params={
                action:'adminName',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                name: this.NAME
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWNAME = false
            await this.getUser()
        },
        async password(){
            const fetch = require('node-fetch')
            const params={
                action:'adminReset',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
        },
        async birthday(){
            
            const fetch = require('node-fetch')
            const params={
                action:'adminBirthday',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                birthday: this.BIRTHDAY
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWBDAY = false
            await this.getUser()
        },
        async email(){
            const fetch = require('node-fetch')
            const params={
                action:'adminEmail',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                email: this.EMAIL
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWMEAIL = false
        await this.getUser()
        },
        async phone(){
            const fetch = require('node-fetch')
            console.log(this.PHONE)
            const params={
                action:'adminPhone',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                phone: this.PHONE
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWPHONE = false
        await this.getUser()
        },
        async karate(){
            const fetch = require('node-fetch')
            const params={
                action:'karate_rank',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                rank: this.KARATE
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWKARATE = false
        await this.getUser()
        },
        async parra(){
            const fetch = require('node-fetch')
            const params={
                action:'parra_rank',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                rank: this.PARRA
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWPARRA = false
        await this.getUser()
        },
        async roles(){
            let i = 0;
            for(let x = 0; x < this.ROLE.length; ++x){
                if(this.ROLE[x]){
                    i += Math.pow(2, x)
                }
            }
            console.log(i)
            const fetch = require('node-fetch')
            const params={
                action:'role',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                role: i
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
        await this.getUser()
            
        },
        async instructorKarate(){
            const fetch = require('node-fetch')
            const params={
                action:'instructorKarate',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                instructors: this.KARATE_INSTRUCTOR
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWINSTRUCTORKARATE = false
        await this.getUser()
        },
        async instructorKobudo(){
            const fetch = require('node-fetch')
            const params={
                action:'instructorKobudo',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                instructors: this.KOBUDO_INSTRUCTOR
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWINSTRUCTORKOBUDO = false
        await this.getUser()
        },
        async instructorTuite(){
            const fetch = require('node-fetch')
            const params={
                action:'instructorTuite',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                instructors: this.TUITE_INSTRUCTOR
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWINSTRUCTORTUITE = false
        await this.getUser()
        },
        async instructorLaw(){
            const fetch = require('node-fetch')
            const params={
                action:'instructorLaw',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                instructors: this.LAW_INSTRUCTOR
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWINSTRUCTORLAW = false
        await this.getUser()
        },
        async honorary(){
            const fetch = require('node-fetch')
            const params={
                action:'honorary',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                instructors: this.HONORARY
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWHONORARY = false
        await this.getUser()
        },
        async kana(){
            const fetch = require('node-fetch')
            const params={
                action:'kana',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                kana: this.KANA
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWKANA = false
        await this.getUser()
        },
        async enabled(){
            const fetch = require('node-fetch')
            const params={
                action:'enabled',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                emabled: this.ENABLED
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            await this.getUser()
        },
        async image(){
            const fetch = require('node-fetch')
            const preview = document.querySelector("#preview")
            const params={
                action:'image',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                image: preview.src
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWIMAGE = false
        await this.getUser()
        },
        promoteKarate: function(){
            const today = new Date()
            this.KARATE.push(today.toLocaleDateString('en-us', {timeZone:'America/Los_Angeles'}))
        },
        promoteParra: function(){
            const today = new Date()
            this.PARRA.push(today.toLocaleDateString('en-us', {timeZone:'America/Los_Angeles'}))
        },
        demoteKarate: function(){
            this.KARATE.pop()
        },
        demoteParra: function(){
            this.PARRA.pop()
        },
        promoteParraInstructor: function(){
            const today = new Date()
            this.PARRA_INSTRUCTOR.push(today.toLocaleDateString('en-us', {timeZone:'America/Los_Angeles'}))
        },
        demoteParraInstructor: function(){
            this.PARRA_INSTRUCTOR.pop()
        },
        async preview(){
            const preview = document.querySelector("#preview")
            const file = document.querySelector("input[type=file]").files[0]
            const reader = new FileReader()
            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
            }, false);
            this.IMAGE = reader.result
            if (file) {
                reader.readAsDataURL(file);
            }
        },
        async confirmKarate(){
            const fetch = require('node-fetch')
            const params={
                action:'karate_rank',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                rank: this.KARATE
            }
            console.log(this.KARATE)
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWKARATE = false
        await this.getUser()

        },
        async confirmParra(){
            const fetch = require('node-fetch')
            const params={
                action:'parra_rank',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                rank: this.PARRA
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWPARRA = false
        await this.getUser()


        },
        async confirmParraInstructor(){
            const fetch = require('node-fetch')
            const params={
                action:'instructorParra',
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME,
                instructors: this.PARRA_INSTRUCTOR
            }
            await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            //const user = await res.json()
            this.SHOWINSTRUCTORPARRA = false
        await this.getUser()
        },
        async deleteUser(){
            const fetch = require('node-fetch')
            const params={
                username: this.$store.getters.username,
                password: this.$store.getters.password,
                user: this.USERNAME
            }
            await fetch('/.netlify/functions/students', {method:'DELETE', body: JSON.stringify(params)})
            //const user = await res.json()
            this.$router.push('/admin-resources/students')
        }
    },
    computed:{
        nextPromotion(){
            if(this.KARATE == null){
                return "awaiting computation..."
            }
            console.log("rank:" + (this.KARATE.length-1))
            const requirement = this.KARATE_RANKS[this.KARATE.length]
            const birthday = new Date(this.BIRTHDAY)
            const today = new Date()
            const lastPromo = new Date(this.KARATE[this.KARATE.length-1])
            const promoBDate = new Date(birthday.setYear(birthday.getYear() + requirement.age))
            const promoTDate = new Date(lastPromo.setMonth(lastPromo.getMonth() + requirement.tig))
            if(promoBDate >= promoTDate){
                return promoBDate > today ? promoBDate.toLocaleDateString('en-US') : "At Will"
            }
            else {
                return promoTDate > today ? promoTDate.toLocaleDateString('en-US') : 'At Will'
            }
        },
        englishToJapanese(){
            let name_arr = kananame.split(' ')
            var hepburn = require("hepburn");
            for(let i = 0; i < name_arr.length; ++i){
                name_arr[i] = hepburn.toKatakana(hepburn.cleanRomaji(name_arr[i]))
            }
            let fullname = name_arr.join('・')
            return fullname
        },
        roleOutput(){
            let i = this.ROLE
            let arr = []
            if(i % 2)
                arr.push("student")
            if((i >> 1) % 2 )
                arr.push("instructor")
            if((i >> 2) % 2 )
                arr.push("admin")
            return arr
        },
    },
    data(){
        return{
            USERNAME: null,
            NAME: null,
            EMAIL: null,
            PHONE:null,
            BIRTHDAY:null,
            PASSWORD:null,
            KARATE:null,
            PARRA:null,
            ROLE:null,
            PARRA_INSTRUCTOR:[],
            KARATE_INSTRUCTOR: null,
            KOBUDO_INSTRUCTOR: null,
            TUITE_INSTRUCTOR: null,
            LAW_INSTRUCTOR: null,
            HONORARY:[],
            KANA:null,
            ENABLED:null,
            IMAGE:null,
            ID:null,
            ACCESSED:null,
            KARATE_RANKS:[
                {rank:'10th Kyu',tig:0, age:0},
                {rank:'9th Kyu', tig:2,age:0},
                {rank:'8th Kyu', tig:2,age:0},
                {rank:'7th Kyu', tig:2,age:0},
                {rank:'6th Kyu', tig:3,age:0},
                {rank:'5th Kyu', tig:3,age:0},
                {rank:'4th Kyu', tig:3,age:0},
                {rank:'3rd Kyu', tig:4,age:0},
                {rank:'2nd Kyu', tig:4,age:0},
                {rank:'1st Kyu', tig:4,age:0},
                {rank:'1st Dan', tig:6,age:16},
                {rank:'2nd Dan', tig:24,age:18},
                {rank:'3rd Dan', tig:36,age:21},
                {rank:'4th Dan', tig:48,age:25},
                {rank:'5th Dan', tig:60,age:30},
                {rank:'6th Dan', tig:72,age:36},
                {rank:'7th Dan', tig:84,age:45},
                {rank:'8th Dan',tig:96,age:55}
            ],
            PARRA_RANKS:[
                'Phase I Level I',
                'Phase I Level II',
                'Phase I Level III',
                'Phase II Level I',
                'Phase II Level II',
                'Phase II Level III',
                'Phase III Level I',
                'Phase III Level II',
                'Phase III Level III',
                'Phase IV Level I',
                'Phase IV Level II',
                'Phase IV Level III',
                'Phase V Level I',
                'Phase V Level II',
                'Phase V Level III',
            ],
            PARRA_LEVELS:[
                "Apprentice Level I",
                "Apprentice Level II",
                "Apprentice Level III",
                "Associate Level I",
                "Associate Level II",
                "Associate Level III",
                "Full Level I",
                "Full Level II",
                "Full Level III",
                "Senior",
            ],
            ROLE_LIST:[
                "student",
                "instructor",
                "admin"
            ],
            SHOWNAME: false,
            SHOWPHONE:false,
            SHOWEMAIL:false,
            SHOWKANA:false,
            SHOWBDAY:false,
            SHOWKARATE:false,
            SHOWPARRA:false,

            SHOWINSTRUCTORKARATE:false,
            SHOWINSTRUCTORKOBUDO:false,
            SHOWINSTRUCTORTUITE: false,
            SHOWINSTRUCTORLAW: false,
            SHOWINSTRUCTORPARRA: false,
            SHOWHONORARY: false, 

            SHOWIMAGE: false


        }
    },
    props:{
        USER:{
            type: Object,
            default: null
        }
    }
}
</script>


<style>
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

.a{
    color: blue;
    text-decoration: none;
}
.a:hover{
    color: lightseagreen;
    text-decoration: underline;
    cursor: pointer;
}
</style>