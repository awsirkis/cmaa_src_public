<template>
    <div class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
        <div class="card">
            <nuxt-link :to="typeof(LNK) == 'object' ? LNK : {path:LNK}">
                <img alt="image" :src="src" class="card-img-top">
                <div class="card-body" style="color: black;">
                    <h5 class="card-title">{{NAME}}</h5>
                    <p class="card-text d-none d-sm-block" v-if="DESCRIPTION != ''">{{DESCRIPTION}}</p>
                </div>    
            </nuxt-link> 
        </div>
    </div>
</template>

<script>
import { any } from 'prop-types';


export default {
    name: 'linkbutton',
    props:{
        SRC:{
            type: String,
            default:'osmkkf_logo.png'
        },
        LNK:{
            type: any,
            default:'/'
        },
        NAME:{
            type: String
        },
        DESCRIPTION:{
            type: String,
            default: ''
        }
    },
    computed:{
        src: function(){
            const validDataUrl = require("valid-data-url")
            if(validDataUrl(this.SRC)){
                return this.SRC
            }
            try{
                var m = require('~/assets/img/' + this.SRC)
            }catch(err){
                var m = require('~/assets/img/osmkkf_logo.png')
            }
            return m.toString()
        }
    }
}
</script>

<style>
.card {
    background-color: #e8e8e8;
    color: black;
    padding: 5px;
    margin: 15px 0px;
    text-decoration: none;
}

.card:hover {
    text-decoration: none;
    background-color: #b8b8b8;
}
.card-title{
    border-bottom: 2px solid grey;
}
.card a:hover{
    color: black;
    text-decoration: none !important;
}
.card a{
    color: black;
}
</style>