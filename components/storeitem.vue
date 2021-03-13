<template>
<div class="col-12 col-sm-6 row">
    <div class="col-12 row" v-if="state == 'display'">
        <div class="col-12 col-md-6">
            <img alt="image" :src="CSRC" style="width: 100%">
        </div>
        <div class="col-12 col-md-6">
            <p v-if="success" style="color:green">Successfully Updated</p>
            <p>Name: {{NAME}}</p>
            <p>Description: {{DESCRIPTION}}</p>
            <p>Category: {{CATEGORY}}</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Size:
                        </td>
                        <td v-for="(item, index) in SIZES" :key="index">
                            {{item}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Price:
                        </td>
                        <td v-for="(item, index) in PRICES" :key="index">
                            {{item}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary" @click="state='edit'"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg> Edit</button>
            <button class="btn btn-danger" @click="deleteItem"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    </svg> Delete</button>
        </div>
    </div>
    <div class="col-6 row" v-else-if="state == 'edit'">
        <div class="col-12 col-sm-4">
            <img alt="image" :src="CSRC" style="width: 100%">
        </div>
        <div class="col-12 col-sm-8">
            <p v-if="!success && success != null" style="color:red">Something Went Wrong</p>
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
            <img id="preview" src="" alt="preview">
            <div class="row col-12" style="margin:15px">
                <div class="row col-12" v-for="n in length" :key="n">
                        <input type="text" v-model="sizes[n-1]" class="form-control col-6 col-md-5" placeholder="Size">
                        <input type="text" v-model="prices[n-1]" class="form-control col-6 col-md-5" placeholder="Price">
                        <button class="btn btn-danger col-12 col-md-2" @click="removeSize(n)"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg> Delete Size</button>
                </div>
                <button class="btn btn-secondary" @click="addSize"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg> Add Size</button>
            </div>
            <div class="row col-12" style="margin:15px">
                <button class="btn btn-primary" @click="edit"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg> Commit</button>
                <button class="btn btn-danger" @click="state='display'"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg> Cancel</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'storeitem',
    props:{
        SRC:{
            type:String,
            default:""
        },
        NAME:{
            type:String,
            default:""
        },
        DESCRIPTION:{
            type:String,
            default:""
        },
        SIZES:{
            type:Array,
            default:[]
        },
        PRICES:{
            type:Array,
            default:[]
        },
        CATEGORY:{
            type:String,
            default:""
        },
        ID:{
            type:String,
            default:""
        }
    },
    data(){
        return{
            state:"display",
            length:0,
            sizes:[],
            prices:[],
            name: this.NAME,
            category: this.CATEGORY,
            description: this.DESCRIPTION,
            success: null
        }
    },
    mounted(){
        this.sizes = this.SIZES
        this.prices = this.PRICES
        this.length = this.SIZES.length
    },
    methods:{
        async get(){
            console.log("GET Call")
            const fetch = require('node-fetch');
            let response = await fetch('/.netlify/functions/store', {method:'GET'})
            let json = JSON.parse(await response.text())
            this.$store.dispatch('setStore', {store: json})
        },
        async edit(){
            console.log("PUT Call")
            const preview = document.querySelector("#preview")
            const fetch = require('node-fetch');
            const params={
                name: this.name,
                description: this.description,
                src: preview.src,
                sizes: this.sizes,
                prices: this.prices,
                category: this.category,
                id: this.ID
            }
            console.log(params)
            const response = await fetch('/.netlify/functions/store', {method:'PUT', body:JSON.stringify(params)})
            console.log(response)
            if(response.status == 200){
                this.success = true
                this.state= 'display'
            }
            else{
                this.success = false
            }

        },
        async deleteItem(){
            console.log("DELETE Call")
            const fetch = require('node-fetch');
            const response = await fetch('/.netlify/functions/store', {method:'DELETE', body:JSON.stringify({id:this.ID})})
            console.log(await response.text())
            if(response.status == 200){
                this.get()
            }

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
                console.log(reader.result)
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    },
    computed:{
        CSRC: function(){
            if(this.SRC == ''){
                return process.env.defaultImage
            }
            return this.SRC
        }
    }
}
</script>