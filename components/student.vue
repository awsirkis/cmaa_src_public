<template>
    <div>
            <h3 :active="NAME">{{ NAME }}</h3>
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
                        <img alt="image" class="headshot" :src="`${SRC}`" style=" width:100%">
                    </div>
                    <div class="row col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                        <div class="col-12">
                            <h3>Student Information</h3>
                            <p>USERNAME: {{USERNAME}}</p>
                            <p>NAME: <span v-if="!CHANGENAME">{{NAME}} <a href="#" @click="showNameChange">Change</a></span> </p>
                            <div class="form-row" v-if="CHANGENAME">
                                <input type="text" class="form-control" v-model="NAME" @change="changeName">
                            </div>
                            <p>PHONE NUMBER: <span v-if="!CHANGEPHONE">{{PHONE}} <a href="#" @click="showPhoneChange">Change</a></span></p>
                            <div class="form-row" v-if="CHANGEPHONE">
                                <input type="text" class="form-control" v-model="PHONE" @change="changePhone">
                            </div>
                            <p>EMAIL ADDRESS : <span v-if="!CHANGEEMAIL">{{EMAIL}} <a href="#" @click="showEmailChange">Change</a></span> </p>
                            <div class="form-row" v-if="CHANGEEMAIL">
                                <input type="text" class="form-control" v-model="EMAIL" @change="changeEmail">
                            </div>
                            <p>BIRTHDATE: <span v-if="!CHANGEBIRTHDATE">{{BIRTHDATE}} <a href="#" @click="showBirthdayChange">Change</a></span> </p>
                            <div class="form-row" v-if="CHANGEBIRTHDATE">
                                <input type="date" class="form-control" v-model="BIRTHDATE" @change="changeBirthday">
                            </div>
                            <p>ROMAJI NAME: <span v-if="!CHANGEROMAJI">{{ROMANAME}} <a href="#" @click="showRomaChange">Change</a></span></p>
                            <div class="form-row" v-if="CHANGEROMAJI">
                                <input type="text" class="form-control" v-model="ROMANAME" @change="changeRomaji">
                            </div>
                            <p>KANA NAME: {{KANANAME}}</p>
                        </div>
                        <div class="col-12">
                            <h3>OSMKKF Rank</h3>
                            <div>
                                <p>DATE PROMOTED: <span v-if="!CHANGEPROMOTION">{{DATEPROMOTED}} <a href="#" @click="showPromoChange">Change</a></span></p>
                            <div class="form-row" v-if="CHANGEPROMOTION">
                                <input type="date" class="form-control" v-model="DATEPROMOTED" @change="changePromo">
                            </div>
                            </div>
                            <div>
                                <p>Next Eligible:<span> {{NEXTPROMOTION}}</span></p>
                            </div>
                            <div>
                                <p><button @click="decrementKarateRank" class="btn btn-secondary" style="margin-right:30px">-</button>{{KARATERANK}}<button @click="incrementKarateRank" class="btn btn-secondary" style="margin-left:30px">+</button></p>
                            </div>
                        </div>
                        <div class="col-12">
                            <h3>Parra Rank</h3>
                            <div>
                                <p><button @click="decrementParraRank" class="btn btn-secondary" style="margin-right:30px">-</button>{{PARRARANK}}<button @click="incrementParraRank" class="btn btn-secondary" style="margin-left:30px">+</button></p>
                            </div>
                        </div>
                        <div class="col-12">
                            <h3>Instructor Status</h3>
                            <h4>Karate Instructor</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="KARATEINSTRUCTOR" @change="changeKarateInstructor">
                                <span class="slider round"></span>
                            </label>
                            <h4>Kobudo Instructor</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="KOBUDOINSTRUCTOR" @change="changeKobudoInstructor">
                                <span class="slider round"></span>
                            </label>
                            <h4>Tuite Instructor</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="TUITEINSTRUCTOR" @change="changeTuiteInstructor">
                                <span class="slider round"></span>
                            </label>
                            <h4>Law Enforcement Instructor</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="LAWINSTRUCTOR" @change="changeLawInstructor">
                                <span class="slider round"></span>
                            </label>
                            <h4>Parra Instructor</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="PARRAINSTRUCTOR" @change="changeParraInstructor">
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="col-12">
                            <h3>Web Account Status</h3>
                            <p><b>Account Status: </b>{{STATUS}}</p>
                            <h4>Student</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="ISSTUDENT" @change="changeStudent">
                                <span class="slider round"></span>
                            </label>
                            
                                <h4>Instructor</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="ISINSTRUCTOR" @change="changeInstructor">
                                <span class="slider round"></span>
                            </label>
                            <h4>Administrator</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="ISADMIN" @change="changeAdmin">
                                <span class="slider round"></span>
                            </label>
                            <h4>Sensei</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="ISSENSEI" @change="changeSensei">
                                <span class="slider round"></span>
                            </label>
                            <h4>Enabled</h4>
                            <label class="switch">
                                <input type="checkbox" v-model="ENABLED" @change="changeEnable">
                                <span class="slider round"></span>
                            </label>
                            <div>
                                <button class="btn btn-secondary" @click="showDelete">DELETE USER</button>
                                <div class="conf" v-if="SHOWDELETE">
                                    <p>Are you sure you want to delete {{USERNAME}}?</p>
                                    <button class="btn btn-secondary" @click="deny">No</button>
                                    <button class="btn btn-danger" @click="deleteUser">Delete</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default{
    name: 'student',
    props:{
        USERNAME: {
            type: String,
            default: ""
        }
    },
    data () {
        return {
            ISSTUDENT : false,
            ISINSTRUCTOR : false,
            ISADMIN : false,
            ISSENSEI : false,
            KARATERANKNUM : 0,
            KARATERANK: "",
            PARRARANKNUM : 0 ,
            PARRARANK: "",
            KARATEINSTRUCTOR : false,
            KOBUDOINSTRUCTOR : false,
            TUITEINSTRUCTOR : false,
            LAWINSTRUCTOR : false,
            PARRAINSTRUCTOR : false,
            EMAIL : "",
            PHONE : "",
            ENABLED : true,
            NAME : false,
            DATEPROMOTED : "",
            BIRTHDATE : "",
            ROMANAME : "",
            KANANAME: "",
            CHANGENAME: false,
            CHANGEEMAIL: false,
            CHANGEBIRTHDATE: false,
            CHANGEPHONE: false,
            CHANGEROMAJI: false,
            CHANGEPROMOTION:false,
            CHANGEKANA: false,
            SHOWDELETE: false,
            STATUS: ""
        }
    },
    mounted(){
        this.update(this)
    },
    computed:{
        SRC: function(){
            
			try {
				var m = require('~/assets/img/personnel/' + this.USERNAME + '/headshot.jpg');
			} catch (ex) {
				var m = require('~/assets/img/osmkkf_logo.png');
			}
			return m.toString();
        },
        NEXTPROMOTION: function(){
            let myMap = new Map()
            myMap.set(0, {wait:2,age:0}) // 10 ->9
            myMap.set(1, {wait:2,age:0})
            myMap.set(2, {wait:2,age:0}) // 8-> 7
            myMap.set(3, {wait:3,age:0})
            myMap.set(4, {wait:3,age:0}) // 6->5
            myMap.set(5, {wait:3,age:0})
            myMap.set(6, {wait:4,age:0}) // 4->3
            myMap.set(7, {wait:4,age:0})
            myMap.set(8, {wait:4,age:0}) // 2-> 1
            myMap.set(9, {wait:6,age:16})
            myMap.set(10, {wait:24,age:18}) // 1-> 2
            myMap.set(11, {wait:36,age:21})
            myMap.set(12, {wait:48,age:25})
            myMap.set(13, {wait:60,age:30})
            myMap.set(14, {wait:72,age:36})
            myMap.set(15, {wait:84,age:45})
            myMap.set(16, {wait:96,age:55})

            let nextTimes = myMap.get(parseInt(this.KARATERANKNUM)) // get wait time and age
            let promodate = new Date(this.DATEPROMOTED)
            let birthdate = new Date(this.BIRTHDATE)
            promodate.setMonth(promodate.getMonth() + nextTimes.wait)
            birthdate.setFullYear(birthdate.getFullYear() + nextTimes.age)
            let today = new Date()
            if(birthdate > today && birthdate >= promodate){
                return birthdate.toLocaleDateString()
            }
            else if (promodate > today && birthdate <= promodate){
                return promodate.toLocaleDateString()
            }
            else{
                return "At Discretion"
            }
        }
    },
    methods:{
        loadKarateRank: function(rank){
            this.KARATERANKNUM=rank
            var myMap = new Map();
            myMap.set(undefined, '10th Kyu')
            myMap.set(0, '10th Kyu')
            myMap.set(1, '9th Kyu')
            myMap.set(2, '8th Kyu')
            myMap.set(3, '7th Kyu')
            myMap.set(4, '6th Kyu')
            myMap.set(5, '5th Kyu')
            myMap.set(6, '4th Kyu')
            myMap.set(7, '3rd Kyu')
            myMap.set(8, '2nd Kyu')
            myMap.set(9, '1st Kyu')
            myMap.set(10, '1st Dan')
            myMap.set(11, '2nd Dan')
            myMap.set(12, '3rd Dan')
            myMap.set(13, '4th Dan')
            myMap.set(14, '5th Dan')
            myMap.set(15, '6th Dan')
            myMap.set(16, '7th Dan')
            return myMap.get(parseInt(rank))
        },
        loadParraRank: function(rank){
            this.PARRARANKNUM=rank
            var myMap = new Map();
            myMap.set(undefined, '10th Kyu')
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
            return myMap.get(parseInt(rank))

        },
        update: function(instance){
            instance.$store.dispatch('adminGetUser', {username: instance.USERNAME}).then(request =>{
            request.on('success', function(response){
                const data = response.data
                instance.ENABLED = data.Enabled
                instance.USERNAME = data.Username
                instance.STATUS = data.UserStatus
                const attributes = data.UserAttributes;
                for(let i = 0; i < attributes.length; ++i){
                    if(attributes[i].Name == "birthdate")
                        instance.BIRTHDATE = attributes[i].Value
                    else if(attributes[i].Name == "email")
                        instance.EMAIL = attributes[i].Value
                    else if(attributes[i].Name == "phone_number")
                        instance.PHONE = attributes[i].Value
                    else if(attributes[i].Name == "name")
                        instance.NAME = attributes[i].Value
                    else if(attributes[i].Name == "custom:RankParra")
                        instance.PARRARANK = instance.loadParraRank(attributes[i].Value)
                    else if(attributes[i].Name == "custom:RankKarate")
                        instance.KARATERANK = instance.loadKarateRank(attributes[i].Value)
                    else if(attributes[i].Name == "custom:Karate_Instructor")
                        instance.KARATEINSTRUCTOR = (parseInt(attributes[i].Value) == 1)
                    else if(attributes[i].Name == "custom:Kobudo_instructor")
                        instance.KOBUDOINSTRUCTOR = (parseInt(attributes[i].Value) == 1)
                    else if(attributes[i].Name == "custom:Tuite_Instructor")
                        instance.TUITEINSTRUCTOR = (parseInt(attributes[i].Value) == 1)
                    else if(attributes[i].Name == "custom:Law_Instructor")
                        instance.LAWINSTRUCTOR = (parseInt(attributes[i].Value) == 1)
                    else if(attributes[i].Name == "custom:Parra_Instructor")
                        instance.PARRAINSTRUCTOR = (parseInt(attributes[i].Value) == 1)
                    else if(attributes[i].Name == "custom:name_kana")    {
                        instance.ROMANAME = attributes[i].Value
                        if(instance.KANANAME == ""){
                            instance.KANANAME = instance.translateName(instance.ROMANAME)
                        }
                    }
                    else if(attributes[i].NAME == "custom:symbol_name")
                        instance.KANANAME = attributes[i].Value
                    else if(attributes[i].Name == "custom:DatePromoted")
                        instance.DATEPROMOTED = attributes[i].Value
                }
            }).send();
            })
            instance.$store.dispatch('adminGetGroupsForUser',{username: instance.USERNAME}).then(request =>{
                request.on('success', function(response){
                    const groups = response.data.Groups;
                    for(let i = 0; i < groups.length; ++i){
                        if(groups[i].GroupName == "Admin")
                            instance.ISADMIN = true
                        else if(groups[i].GroupName == "Student")
                            instance.ISSTUDENT = true
                        else if(groups[i].GroupName == "Instructor")
                            instance.ISINSTRUCTOR = true
                        else if(groups[i].GroupName == "Sensei")
                            instance.ISSENSEI = true
                    }
                }).send();
            })
        },
        translateName: function(kananame){
            let name_arr = kananame.split('_')
            var hepburn = require("hepburn");
            for(let i = 0; i < name_arr.length; ++i){
                name_arr[i] = hepburn.toKatakana(hepburn.cleanRomaji(name_arr[i]))
            }
            let fullname = name_arr.join('・')
            return fullname
            
        },
        decrementKarateRank: function(){
            this.KARATERANK = this.loadKarateRank(--this.KARATERANKNUM)
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:RankKarate", Value:this.KARATERANKNUM.toString()}]})
        },
        incrementKarateRank: function(){
            this.KARATERANK = this.loadKarateRank(++this.KARATERANKNUM)
            this.DATEPROMOTED = new Date().toLocaleDateString()
            alert(this.DATEPROMOTED)
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:RankKarate", Value:this.KARATERANKNUM.toString()},{Name:"custom:DatePromoted",Value:this.DATEPROMOTED}]})
            window.open('../print-certificates?username=' + this.USERNAME)
        },
        decrementParraRank: function(){
            this.PARRARANK = this.loadParraRank(--this.PARRARANKNUM)
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:RankParra", Value:this.PARRARANKNUM.toString()}]})
        },
        incrementParraRank: function(){
            this.PARRARANK = this.loadParraRank(++this.PARRARANKNUM)
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:RankParra", Value:this.PARRARANKNUM.toString()}]})
        },
        changeKarateInstructor: function(){
            this.KARATEINSTRUCTOR = !!this.KARATEINSTRUCTOR
            let set = this.KARATEINSTRUCTOR ? 1 : 0
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:Karate_Instructor", Value:set.toString()}]})
        },
        changeKobudoInstructor: function(){
            this.KOBUDOINSTRUCTOR = !!this.KOBUDOINSTRUCTOR
            let set = this.KOBUDOINSTRUCTOR ? 1 : 0
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:Kobudo_instructor", Value:set.toString()}]})

        },
        changeTuiteInstructor: function(){
            this.TUITEINSTRUCTOR = !!this.TUITEINSTRUCTOR
            let set = this.TUITEINSTRUCTOR ? 1 : 0
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:Tuite_Instructor", Value:set.toString()}]})

        },
        changeLawInstructor: function(){
            this.LAWINSTRUCTOR = !!this.LAWINSTRUCTOR
            let set = this.LAWINSTRUCTOR ? 1 : 0
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:Law_Instructor", Value:set.toString()}]})

        },
        changeParraInstructor: function(){
            this.PARRAINSTRUCTOR = !!this.PARRAINSTRUCTOR
            let set = this.PARRAINSTRUCTOR ? 1 : 0
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:Parra_Instructor", Value:set.toString()}]})

        },
        showDelete: function(){
            this.SHOWDELETE = true
        },
        deny: function(){
            this.SHOWDELETE = false
        },
        deleteUser: function(){
            this.$store.dispatch('adminDeleteUser', {user: this.USERNAME})
            this.$router.push('./')
        },
        changeKana: function(){
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:symbol_name", Value:this.KANANAME.toString()}]})
        },
        changeStudent: function(){
            this.ISSTUDENT = !!this.ISSTUDENT
            if(this.ISSTUDENT){
                this.$store.dispatch('adminAddUserToGroup', {username: this.USERNAME, groupname:"Student"})
            }
            else{
                this.$store.dispatch('adminRemoveUserFromGroup', {username: this.USERNAME, groupname:"Student"})
            }
        },
        changeInstructor: function(){
            this.ISINSTRUCTOR = !!this.ISINSTRUCTOR
            if(this.ISINSTRUCTOR){
                this.$store.dispatch('adminAddUserToGroup', {username: this.USERNAME, groupname:"Instructor"})
            }
            else{
                this.$store.dispatch('adminRemoveUserFromGroup', {username: this.USERNAME, groupname:"Instructor"})
            }
        },
        changeAdmin: function(){
            this.ISADMIN = !!this.ISADMIN
            if(this.ISADMIN){
                this.$store.dispatch('adminAddUserToGroup', {username: this.USERNAME, groupname:"Admin"})
            }
            else{
                this.$store.dispatch('adminRemoveUserFromGroup', {username: this.USERNAME, groupname:"Admin"})
            }
        },
        changeSensei: function(){
            this.ISSENSEI = !!this.ISSENSEI
            if(this.ISSENSEI){
                this.$store.dispatch('adminAddUserToGroup', {username: this.USERNAME, groupname:"Sensei"})
            }
            else{
                this.$store.dispatch('adminRemoveUserFromGroup', {username: this.USERNAME, groupname:"Sensei"})
            }
        },
        changeEnable: function(){
            this.ENABLE = !this.ENABLE
            console.log(this.ENABLE)
            if(this.ENABLE){
                console.log('enable')
                this.$store.dispatch('adminEnableUser',{username: this.USERNAME})
            }
            else{
                console.log('disable')
                this.$store.dispatch('adminDisableUser',{username: this.USERNAME})
            }
        },
        showNameChange: function(){
            this.CHANGENAME = !this.CHANGENAME
        },
        showPhoneChange: function(){
            this.CHANGEPHONE = !this.CHANGEPHONE
        },
        showEmailChange: function(){
            this.CHANGEEMAIL = !this.CHANGEEMAIL
        },
        showBirthdayChange: function(){
            this.CHANGEBIRTHDATE = !this.CHANGEBIRTHDATE
        },
        showRomaChange: function(){
            this.CHANGEROMAJI = !this.CHANGEROMAJI
        },
        showPromoChange: function(){
            this.CHANGEPROMOTION = !this.CHANGEPROMOTION
        },
        showKanaChange: function(){
            this.CHANGEKANA = !this.CHANGEKANA
        },
        changeName: function(){
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"name", Value:this.NAME}]})
        },
        changePhone: function(){
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"phone_number", Value:this.PHONE.toString()},{Name:"phone_number_verified",Value:"true"}]})
        },
        changeEmail: function(){
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"email", Value:this.EMAIL.toString()},{Name:"email_verified",Value:"true"}]})
        },
        changeBirthday: function(){
            alert(new Date(this.BIRTHDATE).toLocaleDateString(undefined,{year:"numeric",month:"2-digit",day:"2-digit"}))
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"birthdate", Value:new Date(this.BIRTHDATE).toLocaleDateString(undefined,{year:"numeric",month:"2-digit",day:"2-digit"})}]})
        },
        changeRomaji: function(){
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:name_kana", Value:this.ROMANAME.toString()}]})
            this.KANANAME = this.translateName(this.ROMANAME)
        },
        changePromo: function(){
            this.$store.dispatch('adminChangeAttribute', {username: this.USERNAME, attributes:[{Name:"custom:DatePromoted", Value:new Date(this.DATEPROMOTED).toLocaleDateString(undefined,{year:"numeric",month:"2-digit",day:"2-digit"})}]})
        },


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
</style>