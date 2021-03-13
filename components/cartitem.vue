<template>
<div class="row col-12">
    <div class="col-4 col-md-3">
        <img alt="image" :src="src" style="width: 100%">
    </div>
    <div class="col-4 col-md-6">
        <p >{{NAME}}</p>
        <input type="text" hidden readonly :value="NAME" >
        <p>${{PRICE}} / Each</p>
        <input type="text" hidden readonly :value="PRICE">
        <p @click="deleteFromCart" style='color:red; cursor:pointer'>❌ delete</p>
    </div>
    <div class="col-4 col-md-3">
        <input class="form-control" style="width: 100%; min-width:0" type="number" min=0 v-model="qty" @change="changeQty">
    </div>
</div>

</template>

<script>
export default {
    
    name: 'cartitem',
    computed:{
        src: function(){
            if (this.SRC == ""){
                return process.env.defaultImage
            }
            return this.SRC
        }
    },
    data() {
        return {
            qty: this.QTY
        }
    },
    props:{
        SRC:{
            type: String,
            default: null
        },
        NAME:{
            type:String,
            default:""
        },
        PRICE:{
            type:Number,
            default:""
        },
        QTY:{
            type:Number,
            default:0
        }
    },
    methods:{
        deleteFromCart: function(){
            this.$store.dispatch('removeFromCart',{name: this.NAME, qty:0})
        },
        changeQty: function(){
            this.$store.dispatch('removeFromCart', {name: this.NAME, qty: this.qty})
        }
    }
}
</script>

