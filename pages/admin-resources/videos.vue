<template>
<div>
    <main>
        <h1>Videos</h1>
        <div id="list-body" class="container-fluid">
            <button class="btn btn-danger" @click="del = true" v-if="!del">Delete</button>
            <button class="btn btn-danger" @click="del = false" v-else>Cancel</button>
            <div class="row" v-if="!del">
                <videoTab v-for="item in videos.data" :key="`video-${item}`" :id="item" :parent="videos.id"/>
            </div>
            <table class="table table-striped table-dark" v-else>
                <tr v-for="item in children" :key="`vid-delete-${item.id}`">
                    <td class="btn btn-danger" @click="remove(item.id)">Delete</td>
                    <td>{{item.title}}</td>
                </tr>
            </table>
            <button class="btn btn-success" @click="addVideo">+</button>
        </div>
    </main>
</div>
</template>

<script>
import videoTab from '~/components/video-item'
export default {
    components:{
        videoTab
    },
    head(){
        return{
            title: 'Video Control',
            meta: [
                { name: 'description', content: 'Administrator resources' },
                
            ],
        }
    },
    data(){
        return{
            videos:[],
            children:[],
            del: false
        }
    },
    methods:{
        async getVideos(){
            const fetch = require('node-fetch')
            const params = {
                action:'getAll'
            }
            const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
            const json = await res.json()
            this.videos = json
        },
        async addVideo(){
            const fetch = require('node-fetch')
            const params = {
                action:'addTop'
            }
            const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
            const json = await res.json()
            this.getVideos()
            this.getChildren()
        },
        async getChildren(){
            const fetch=require('node-fetch')
            this.children = []
            for(let i = 0; i < this.videos.data.length; ++i){
                let params = {
                    action:'getVideo',
                    id: this.videos.data[i]
                }
                let res = await fetch('/.netlify/functions/video', {method:'POST', body:JSON.stringify(params)})
                let json = await res.json()
                this.children.push({title: json.title, id: json.id})
            }
        },
        async remove(item){
            const fetch=require('node-fetch')
            const params = {
                action: 'removeItem',
                parent: this.videos.id,
                id: item
            }
            const res = await fetch('/.netlify/functions/video',{method:'POST', body:JSON.stringify(params)})
            const json = await res.json()
            this.children.splice(this.videos.data.indexOf(item),1)
            this.videos.data.splice(this.videos.data.indexOf(item),1)
        },
    },
    async mounted(){
        await this.getVideos()
        await this.getChildren()
    }
}
</script>

<style>
#list-body{
    background-color: lightgrey;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: black;
}
.item{
    border: 2px solid grey;
    border-top: none;
}
.item:first-of-type{
    border-top: 2px solid grey;
    border-top-left-radius: 15px;
}
.item:last-of-type{
    
    border-bottom-left-radius: 15px;
}
</style>