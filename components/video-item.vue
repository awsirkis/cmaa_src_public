<template>
<div class="col-12 item">
    <div v-if="ready">  
        <input class="form-control col-12" type="text" v-model="video.title" placeholder="Title" v-if="edit">
        <h3 class="col-12" v-else>{{video.title}}</h3>
        <input class="form-control col-12" type="text" v-model="video.description" placeholder="Description" v-if="edit">
        <p class="col-12" v-else>{{video.description}}</p>
        <select class="form-control col-6" type="number" v-model="video.kmin" placeholder="Min. Karate Rank" v-if="edit">
            <option value="0" :selected="video.kmin == 0">Unranked</option>
            <option value="1" :selected="video.kmin == 1">10th Kyu</option>
            <option value="2" :selected="video.kmin == 2">9th Kyu</option>
            <option value="3" :selected="video.kmin == 3">8th Kyu</option>
            <option value="4" :selected="video.kmin == 4">7th Kyu</option>
            <option value="5" :selected="video.kmin == 5">6th Kyu</option>
            <option value="6" :selected="video.kmin == 6">5th Kyu</option>
            <option value="7" :selected="video.kmin == 7">4th Kyu</option>
            <option value="8" :selected="video.kmin == 8">3rd Kyu</option>
            <option value="9" :selected="video.kmin == 9">2nd Kyu</option>
            <option value="10" :selected="video.kmin == 10">1st Kyu</option>
            <option value="11" :selected="video.kmin == 11">1st Dan</option>
            <option value="12" :selected="video.kmin == 12">2nd Dan</option>
            <option value="13" :selected="video.kmin == 13">3rd Dan</option>
            <option value="14" :selected="video.kmin == 14">4th Dan</option>
            <option value="15" :selected="video.kmin == 15">5th Dan</option>
            <option value="16" :selected="video.kmin == 16">6th Dan</option>
            <option value="17" :selected="video.kmin == 17">7th Dan</option>
            <option value="18" :selected="video.kmin == 18">8th Dan</option>
            <option value="19" :selected="video.kmin == 19">9th Dan</option>
            <option value="20" :selected="video.kmin == 20">10th Dan</option>
        </select>
        <span class='col-6'>{{KARATE_RANKS[video.kmin]}}</span>
        <select class="form-control col-6" type="number" v-model="video.pmin" placeholder="Min. Parra Rank" v-if="edit">
            <option value="0" :selected="video.pmin == 0">Unranked</option>
            <option value="1" :selected="video.pmin == 1">Phase I Level I</option>
            <option value="2" :selected="video.pmin == 2">Phase I Level II</option>
            <option value="3" :selected="video.pmin == 3">Phase I Level III</option>
            <option value="4" :selected="video.pmin == 4">Phase II Level I</option>
            <option value="5" :selected="video.pmin == 5">Phase II Level II</option>
            <option value="6" :selected="video.pmin == 6">Phase II Level III</option>
            <option value="7" :selected="video.pmin == 7">Phase III Level I</option>
            <option value="8" :selected="video.pmin == 8">Phase III Level II</option>
            <option value="9" :selected="video.pmin == 9">Phase III Level III</option>
            <option value="10" :selected="video.pmin == 10">Phase IV Level I</option>
            <option value="11" :selected="video.pmin == 11">Phase IV Level II</option>
            <option value="12" :selected="video.pmin == 12">Phase IV Level III</option>
            <option value="13" :selected="video.pmin == 13">Phase V Level I</option>
            <option value="14" :selected="video.pmin == 14">Phase V Level II</option>
            <option value="15" :selected="video.pmin == 15">Phase V Level III</option>
        </select>
        <span class='col-6'>{{PARRA_RANKS[video.pmin]}}</span>
        <div class="col-6" v-if="edit">
            <p>Required:</p>
            <label class="switch">
                <input type="checkbox" v-model="video.required">
                <span class="slider round"></span>
            </label>
        </div>
        <p v-else>Required: {{video.required}}</p>
        <input class="form-control col-12" type="file"  :id="`previewImage${id}`" v-if="edit" @change="previewImage">
        <embed class="col-12 col-lg-6" :src="video.thumbnail" v-if="preview">
        <input class="form-control col-12" type="file" :id="`previewVideo${id}`" v-if="edit && typeof(video.data) == 'string'" @change="previewVideo">
        <embed class="col-12 col-lg-6" :src="video.data" v-if="video.data != null && typeof(video.data) == 'string' && preview" >
        <button class="btn btn-primary" @click="addVideo">Add Item</button>
        <button class="btn btn-primary" @click="edit = true" v-if="!edit">Edit</button>
        <button class="btn btn-success" @click="push" v-else>Confirm</button>
        <button class="btn btn-danger" @click="del = true" v-if="!del">Edit Order</button>
        <button class="btn btn-danger" @click="del = false" v-else>Cancel</button>
        <button class="btn btn-secondary" @click="preview = !preview">Show/Hide Thumbnail/Video</button>
        <h4 class="col-12 video-header" v-if="typeof(video.data) == 'object' && !del" @click="show = !show">Show Videos ({{video.data ? video.data.length : 0}})</h4>
        <div v-if="video.data != null && typeof(video.data) == 'object' && show && !del">
            <videoTab :id="item" :parent="id" v-for="item in video.data" :key="`video-${item}`"/>
        </div>
        <table class="table table-striped table-dark" v-if="video.data != null && typeof(video.data) == 'object' && del">
            <tr v-for="(item, index) in children" :key="`vid-delete-${item.id}`">
                <td class="btn btn-danger" @click="remove(item.id)">Delete</td>
                <td>{{item.title}}</td>
                <td class="btn btn-primary" @click="ascend(index)" :disabled="index == 0">Up</td>
                <td class="btn btn-primary" @click="descend(index)" :disabled="index == children.length-1">Down</td>
            </tr>
        </table>
    </div>
    <div class="container fluid" v-else>
        <div class="row justify-content-center">
        <div class="loader"></div>

        </div>

    </div>
</div>
</template>

<script>
import videoTab from '~/components/video-item.vue'
export default {
    components:{
        videoTab
    },
    name:'videoTab',
    props:{
        id:{
            type: String,
            default:null
        },
        parent:{
            type:String,
            default: null
        }
    },
    methods:{
        async push(){
            const fetch=require('node-fetch')
            const params = {
                action:'push',
                title: this.video.title,
                description: this.video.description,
                id: this.id,
                thumbnail:this.video.thumbnail,
                data: this.video.data,
                kmin: this.video.kmin,
                pmin: this.video.pmin,
                required: this.video.required
            }
            const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
            const json = await res.json()
            this.edit = false
        },
        async remove(item){
            const fetch=require('node-fetch')
            const params = {
                action: 'removeItem',
                parent: this.id,
                id: item
            }
            const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
            const json = await res.json()
            this.children.splice(this.video.data.indexOf(item),1)
            this.video.data.splice(this.video.data.indexOf(item),1)
            if(this.video.data.length == 0){
                this.video.data = ""
            }
        },
        async addVideo(){
            const fetch = require('node-fetch')
            const params = {
                action:'addVideo',
                parent: this.id
            }
            const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
            const json = await res.json()
            if(typeof(this.video.data) == 'string')
                this.video.data = []
            this.video.data.push(json.data.id)
            await this.getChildren()
        },
        async previewImage(){
            const file = document.querySelector("#previewImage" + this.id).files[0]
            const reader = new FileReader()
            var t = this
            reader.addEventListener("load", function () {
                // convert image file to base64 string
                t.video.thumbnail = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }

        },
        async previewVideo(){
            const file = document.querySelector("#previewVideo" + this.id).files[0]
            const reader = new FileReader()
            var t = this
            reader.addEventListener("load", function () {
                t.video.thumbnail = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }

        },
        async getChildren(){
            const fetch=require('node-fetch')
            this.children = []
            if(this.video.data == null){
                return
            }
            for(let i = 0; i < this.video.data.length; ++i){
                let params = {
                    action:'getVideo',
                    id: this.video.data[i]
                }
                let res = await fetch('/.netlify/functions/video', {method:'POST', body:JSON.stringify(params)})
                let json = await res.json()
                this.children.push({title: json.title, id: json.id})
            }
        },
        async ascend(index){
            let t = this.children[index]
            this.children[index] = this.children[index-1]
            this.children[index-1] = t
            this.children.push({id:"0", name:"test"})
            this.children.pop()
            t = this.video.data[index]
            this.video.data[index] = this.video.data[index-1]
            this.video.data[index-1] = t
            this.video.data.push({title:"null", description:"null", kmin:0, pmin:0, thumbnail:"", data: ""})
            this.video.data.pop()
            this.push()
        },
        async descend(index){
            let t = this.children[index]
            this.children[index] = this.children[index+1]
            this.children[index+1] = t
            this.children.push({id:"0", name:"test"})
            this.children.pop()
            t = this.video.data[index]
            this.video.data[index] = this.video.data[index+1]
            this.video.data[index+1] = t
            this.video.data.push({title:"null", description:"null", kmin:0, pmin:0, thumbnail:"", data: ""})
            this.video.data.pop()
            this.push()
        }

    },
    async mounted(){
        const fetch=require('node-fetch')
        const params={
            action:'getVideo',
            id:this.id
        }
        const res = await fetch('/.netlify/functions/video', {method:'POST', body:JSON.stringify(params)})
        const json = await res.json()
        this.video = json
        await this.getChildren()
        this.ready = true
        
    },
    data(){
        return{
            video: null,
            ready: false,
            edit: false,
            show: false,
            del: false,
            children: [],
            KARATE_RANKS:[
                'unranked',
                '10th Kyu',
                '9th Kyu',
                '8th Kyu',
                '7th Kyu',
                '6th Kyu',
                '5th Kyu',
                '4th Kyu',
                '3rd Kyu',
                '2nd Kyu',
                '1st Kyu',
                '1st Dan',
                '2nd Dan',
                '3rd Dan',
                '4th Dan',
                '5th Dan',
                '6th Dan',
                '7th Dan',
                '8th Dan',
                '9th Dan',
                '10th Dan'
            ],
            PARRA_RANKS:[
                'unranked',
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
            preview: false
        }
    }
}
</script>

<style>
.item{
    padding: 15px;
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

.video-header:hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>