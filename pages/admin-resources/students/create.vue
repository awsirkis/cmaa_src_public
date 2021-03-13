<template>
<div>
<main>
    <article>
        <h1>Create User</h1>
    </article>
    <!--<form class="create w-100" style="padding:15px" @submit="create">
        <div class="form-row">
            <div class="col-md-6 col-xs-12">
            <input type="text" class="form-control" v-model="firstname" placeholder="First name" required>
            </div>
            <div class="col-md-6 col-xs-12">
            <input type="text" class="form-control" v-model="lastname" placeholder="Last name" required>
            </div>
            <div class="col-md-6 col-xs-12">
                <input type="email" class="form-control" v-model="email" placeholder="Email" required>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" v-model="email_verify" id="emailVerify">
                    <label class="form-check-label" for="emailVerify">
                        Automatically Verify?
                    </label>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <input type="phone" class="form-control" v-model="phone" placeholder="Phone Number" required>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" v-model="phone_verify" id="phoneVerify">
                    <label class="form-check-label" for="emailVerify">
                        Automatically Verify?
                    </label>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <label for="startingKRank">Starting Karate Rank</label>
                <select class="form-control" placeholder="startingRank" id="startingKRank" v-model="rank" required>
                    <option value="0">10th Kyu</option>
                    <option value="1">9th Kyu</option>
                    <option  value="2">8th Kyu</option>
                    <option  value="3">7th Kyu</option>
                    <option  value="4">6th Kyu</option>
                    <option  value="5">5th Kyu</option>
                    <option  value="6">4th Kyu</option>
                    <option  value="7">3rd Kyu</option>
                    <option  value="8">2nd Kyu</option>
                    <option  value="9">1st Kyu</option>
                    <option  value="10">1st Dan</option>
                    <option  value="11">2nd Dan</option>
                    <option  value="12">3rd Dan</option>
                    <option  value="13">4th Dan</option>
                    <option  value="14">5th Dan</option>
                    <option  value="15">6th Dan</option>
                    <option  value="16">7th Dan</option>
                    <option  value="17">8th Dan</option>
                    <option  value="18">9th Dan</option>
                </select>
            </div>
            <div class="col-md-6 col-xs-12">
                <label for="bday">Birthday</label>
                <input type="date" class="form-control" v-model="birthday" required>
            </div>
        </div>
        
        <div class="w-100 row justify-content-around">
            <button  type="submit" class="btn btn-secondary">Create</button>
        </div>
    </form>-->
    <form class="create w-100" id="student-create" style="padding: 15px">
        <div class="row">
            <div class="col-md-6 col-12">
                <input type="text" class="form-control" v-model="name" name="name" placeholder="Name" required>
            </div>
            <div class="col-md-6 col-12">
                <input type="text" class="form-control" v-model="kana" name="kana" placeholder="Kana" required>
            </div>
            <div class="col-md-6 col-12">
                <input type="email" class="form-control" v-model="email" name="email" placeholder="Email" required>
            </div>
            <div class="col-md-6 col-12">
                <input type="phone" class="form-control" v-model="phone" name="phone" placeholder="Phone Number">
            </div>
            <div class="col-md-6 col-12">
                <label for="bday">Birthday</label>
                <input type="date" class="form-control" v-model="birthday" name="birthday">
            </div>
            <div class="col-md-6 col-12">
                <label for="bday">Profile Picture</label>
                <input type="file" class="form-control" name="profile" @change="preview">
            </div>
            <div class="col-md-6 col-12">
                <img id="preview" src="" alt="preview" style="max-width: 300px">
            </div>
            <div class="w-100 row justify-content-around">
                <button  class="btn btn-secondary" @click='create2'>Create</button>
            </div>
        </div>
    </form>
</main>
</div>
</template>


<script>
export default {
    
    head(){
        return {
            title: 'Create Student | CMAA',
            meta: [
                { name: 'description', content: 'List of Students' },
                {
                name: 'keywords', content: 'karate, okinawan, Everett, tuite, kali, silat, JKD, muay thai, WA, washington, washington state, snohomish, judo, BJJ,jiujitsu,jiu-jitsu, brazilian,jiu,jitsu, aikido, aikijitsu, iaido, iaijitsu, tae,kwan,do, taekwando, krav,maga, boxing, filipino,boxing, law enforcement, military, martial, arts'
                },
                {
                    charset: 'UTF-8'
                },
                {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                }
            ],
    
    }
    },
    data(){
        return{
            name: null,
            email: null,
            phone: null,
            birthday: null,
            kana: null
        }
    },
    methods:{
        async create2(){
            const fetch = require('node-fetch')
            const preview = document.querySelector("#preview")
            const params = {
                action: "create",
                name: this.name, 
                email: this.email, 
                phone: this.phone,
                kana: this.kana, 
                image: preview.src,
                birthdate: new Date(this.birthday)
            }
            fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
        },
        async preview(){
            const preview = document.querySelector("#preview")
            const file = document.querySelector("input[type=file]").files[0]
            const reader = new FileReader()
            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
                console.log(reader.result)
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    }
}

</script>

<style>
.create{
  background-color:gainsboro;
  color:black;
  border-radius: 15px;
}
</style>