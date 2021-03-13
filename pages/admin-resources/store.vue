<template>
<div>
    <main>
        <h1>Manage Store</h1>
        <ul class="nav nav-tabs nav-fill" style="background-color: lightgrey">
            <li class="nav-item" @click="selected = null">
                <a class="nav-link active" href="#" v-if="selected === null">All Items</a>
                <a class="nav-link" href="#" v-else>All Items</a>
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'staff'}).length == 0">
                <a class="nav-link disabled" href="#">Bo</a>
            </li>
            <li class="nav-item" @click="selected = 'staff'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'staff'">Bo</a>
                <a class="nav-link" href="#" v-else>Bo</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'clothing'}).length == 0">
                <a class="nav-link disabled" href="#">Clothing</a>
            </li>
            <li class="nav-item" @click="selected = 'clothing'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'clothing'">Clothing</a>
                <a class="nav-link" href="#" v-else>Clothing</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'eku'}).length == 0">
                <a class="nav-link disabled" href="#">Eku</a>
            </li>
            <li class="nav-item" @click="selected = 'eku'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'eku'">Bo</a>
                <a class="nav-link" href="#" v-else>Eku</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'event'}).length == 0">
                <a class="nav-link disabled" href="#">Event</a>
            </li>
            <li class="nav-item" @click="selected = 'event'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'event'">Event</a>
                <a class="nav-link" href="#" v-else>Event</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'gi'}).length == 0">
                <a class="nav-link disabled" href="#">Gi</a>
            </li>
            <li class="nav-item" @click="selected = 'gi'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'gi'">Gi</a>
                <a class="nav-link" href="#" v-else>Gi</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'gloves'}).length == 0">
                <a class="nav-link disabled" href="#">Gloves</a>
            </li>
            <li class="nav-item" @click="selected = 'gloves'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'gloves'">Bo</a>
                <a class="nav-link" href="#" v-else>Gloves</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'headgear'}).length == 0">
                <a class="nav-link disabled" href="#">Headgear</a>
            </li>
            <li class="nav-item" @click="selected = 'headgear'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'headgear'">Headgear</a>
                <a class="nav-link" href="#" v-else>Headgear</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'kama'}).length == 0">
                <a class="nav-link disabled" href="#">Kama</a>
            </li>
            <li class="nav-item" @click="selected = 'kama'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'kama'">Kama</a>
                <a class="nav-link" href="#" v-else>Kama</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'knife'}).length == 0">
                <a class="nav-link disabled" href="#">Knives</a>
            </li>
            <li class="nav-item" @click="selected = 'knife'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'knife'">Knife</a>
                <a class="nav-link" href="#" v-else>Knife</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'legs'}).length == 0">
                <a class="nav-link disabled" href="#">Legs</a>
            </li>
            <li class="nav-item" @click="selected = 'legs'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'legs'">Leg Gear</a>
                <a class="nav-link" href="#" v-else>Leg Gear</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'mouthguard'}).length == 0">
                <a class="nav-link disabled" href="#">Mouthguard</a>
            </li>
            <li class="nav-item" @click="selected = 'mouthguard'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'mouthguard'">Bo</a>
                <a class="nav-link" href="#" v-else>Mouthguard</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'nunchaku'}).length == 0">
                <a class="nav-link disabled" href="#">Nunchaku</a>
            </li>
            <li class="nav-item" @click="selected = 'nunchaku'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'nunchaku'">Nunchaku</a>
                <a class="nav-link" href="#" v-else>Nunchaku</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'rochin'}).length == 0">
                <a class="nav-link disabled" href="#">Rochin</a>
            </li>
            <li class="nav-item" @click="selected = 'rochin'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'rochin'">Rochin</a>
                <a class="nav-link" href="#" v-else>Rochin</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'sai'}).length == 0">
                <a class="nav-link disabled" href="#">Sai</a>
            </li>
            <li class="nav-item" @click="selected = 'sai'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'sai'">Sai</a>
                <a class="nav-link" href="#" v-else>Sai</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'tambo'}).length == 0">
                <a class="nav-link disabled" href="#">Tanbo/Eskrima</a>
            </li>
            <li class="nav-item" @click="selected = 'tambo'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'tambo'">Tanbo/Eskrima</a>
                <a class="nav-link" href="#" v-else>Tanbo/Eskrima</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'tekko'}).length == 0">
                <a class="nav-link disabled" href="#">Tekko</a>
            </li>
            <li class="nav-item" @click="selected = 'tekko'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'tekko'">Tekko</a>
                <a class="nav-link" href="#" v-else>Tekko</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'tinbe'}).length == 0">
                <a class="nav-link disabled" href="#">Tinbe</a>
            </li>
            <li class="nav-item" @click="selected = 'tinbe'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'tinbe'">Tinbe</a>
                <a class="nav-link" href="#" v-else>Tinbe</a>  
            </li>
            <li class="nav-item" v-if="$store.getters.store.filter(item=>{return item.category == 'tonfa'}).length == 0">
                <a class="nav-link disabled" href="#">Tonfa</a>
            </li>
            <li class="nav-item" @click="selected = 'tonfa'" v-else>
                <a class="nav-link active" href="#" v-if="selected == 'tonfa'">Tonfa</a>
                <a class="nav-link" href="#" v-else>Tonfa</a>  
            </li>
        </ul>
        <div style="background-color:lightgrey;padding:15px;color:black">
            <h3>Table of all items</h3>
            <div class="container container-fluid" >
                <div class="row"  style="margin:15px">
                    <storeitem v-for="(item, index) in $store.getters.store.filter(item=>{return item.category == selected || selected === null})" :key="index" :SRC="item.src" :NAME="item.name" :DESCRIPTION="item.description" :CATEGORY="item.category" :SIZES="item.sizes" :PRICES="item.prices" :ID="item.id"/>
                </div>
            </div>
        </div>
        <div class="container-fluid" style="background-color:lightgrey;padding:15px;color:black">
            <h3>Add Item</h3>
            <p v-if="$route.query.status == 200" style="color:green">New item created successfully</p>
            <input class="form-control" type="text" v-model="name" placeholder="Name">
            <input class="form-control" type="text" v-model="description" placeholder="Description">
            <select v-model="category" class="form-control">
                <option value="staff">Bo</option>
                <option value="clothing">Clothing</option>
                <option value="eku">Eku</option>
                <option value="event">Event</option>
                <option value="gi">Gi</option>
                <option value="gloves">Gloves</option>
                <option value="headgear">Headgear</option>
                <option value="kama">Kama</option>
                <option value="knife">Knives</option>
                <option value="legs">Legs</option>
                <option value="mouthguard">Mouthguard</option>
                <option value="nunchaku">Nunchaku</option>
                <option value="rochin">Rochin</option>
                <option value="sai">Sai</option>
                <option value="tambo">Tanbo/Eskrima</option>
                <option value="tekko">Tekko</option>
                <option value="tinbe">Tinbe</option>
                <option value="tonfa">Tonfa</option>
            </select>
            <input type="file" class="form-control" name="profile" @change="preview" required>
            <img id="preview" src="" alt="preview"  style="max-width: 300px">
            <div class="row col-12" style="margin:15px">
                <div class="row col-12" v-for="n in length" :key="n">
                        <input type="text" v-model="sizes[n]" class="form-control col-6 col-md-5" placeholder="Size">
                        <input type="text" v-model="prices[n]" class="form-control col-6 col-md-5" placeholder="Price">
                        <button class="btn btn-danger col-12 col-md-2" @click="removeSize(n)"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg> Delete Size</button>
                </div>
                <button class="btn btn-secondary" @click="addSize"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg> Add Size</button>
            </div>
            <div class="row col-12" style="margin:15px">
                <button class="btn btn-primary" @click="add"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg> Add Item</button>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import storeitem from '~/components/storeitem.vue'
export default {
    components:{
        storeitem
    },
    async mounted(){
        await this.get()
    },
    head(){
        return{
            title: "Store Management - CMAA",
            meta:[
                {name: "description", content:"Manage the Store"}
            ]
        }
    },
    data(){
        return{
            name:'',
            description:'',
            src:'',
            sizes:[],
            prices:[],
            length:1,
            category:'',
            selected:null
        }
    },
    methods:{
        async get(){
            const fetch = require('node-fetch');
            let response = await fetch('/.netlify/functions/store', {method:'GET'})
            let json = JSON.parse(await response.text())
            console.log(json)
            this.$store.dispatch('setStore', {store: json})
        },
        async add(){
            const fetch = require('node-fetch');
            const preview = document.querySelector("#preview")
            const params={
                name: this.name,
                description: this.description,
                src: preview.src,
                sizes: this.sizes,
                prices: this.prices,
                category: this.category
            }
            let response = await fetch('/.netlify/functions/store', {method:'POST', body: JSON.stringify(params)})
            this.$router.push({path: this.$router.path, query:{status:response.status}})
            this.get()
        },
        removeSize: function(index){
            this.sizes.splice(index, 1)
            this.prices.splice(index,1)
            this.length--
        },
       addSize: function(){
            this.length++
        },
        async preview(){
            const preview = document.querySelector("#preview")
            const file = document.querySelector("input[type=file]").files[0]
            const reader = new FileReader()
            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }
        
    }
}
</script>