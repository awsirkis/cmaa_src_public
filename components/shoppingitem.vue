<template>
<div class="form-row shopping-item" style="border-bottom:3px solid grey;padding:15px 0px;">
    <div class="col-8 row" style="padding-left:15px">
        <select class="form-control col-md-6 col-xs-12" style="height: 100%" :id="`selector-${index}`" :name="`selector-${index}`" v-model="item" @change="updateItem" required>
            <option value="" selected disabled hidden>Choose Product</option>
            <option v-for="product in availableItems" v-bind:key="product" :value="`${product.name}`">{{product.name}}</option>
        </select>
        <input disabled class="form-control col-md-3 col-sm-4 col-xs-4" :id="`price-${index}`" :name="`price-${index}`" value="$0.00" style="background-color:lightgrey">
        <input type="number" value="0" min="0" v-model="qty" :id="`qty-${index}`" :name="`qty-${index}`" class="form-control col-md-3 col-sm-4 col-xs-4" @change="updateItem" required>
    </div>
    <div class="col-4 row" style="padding-left:15px">
        <div class="col-md-6 col-xs-12">
            <input disabled class="form-control" :id="`subtotal-${index}`" style="background-color:lightgrey" value="$0.00">
        </div>
        <div class="col-md-6 col-xs-12">
            <button class="btn btn-secondary" @click="deleteItem" style="margin-left:70%;margin-right:auto" title="Delete Item">X</button>
        </div>
    </div>
</div>
</template>

<script>
export default{
    props:{
        availableItems:{
            default:null
        },
        index:{
            type: Number,
            default:0
        }
    },
    data(){
        return{
            myMap: null,
            item: "",
            qty: 0
        }
    },
    mounted(){
        this.myMap = new Map()
        this.availableItems.forEach(item => {
            this.myMap.set(item.name,item.price)
        })
        this.myMap.set("",0)
    },
     methods:{
         updateItem: function(){
             // local
             document.querySelector("#price-" + this.index).value = '$' + this.myMap.get(this.item).toFixed(2).toString() + '/ each'
             document.querySelector("#subtotal-" + this.index).value = '$' + (this.qty * this.myMap.get(this.item)).toFixed(2).toString()
             this.$emit('updateItem', this.item, this.qty, this.myMap.get(this.item).toFixed(2))
            this.globalUpdate()
         },
         deleteItem: function(){
             document.querySelector("#subtotal-" + this.index).value = '$' + (0).toFixed(2).toString()
             document.querySelector("#qty-" + this.index).value = 0
             document.querySelector("#selector-" + this.index).value = ""
             this.globalUpdate()
             this.$destroy();
            
            // remove the element from the DOM
            this.$el.parentNode.removeChild(this.$el);
         },
         globalUpdate: function(){
             // global
             let instance = this
            let globalSubtotal = 0
            let childNum = 0;
            let adultNum = 0;
            let childList = Array.from(document.getElementById("shoppinglist").children)
            childList.forEach(function(child){
                globalSubtotal += parseInt(child.children[1].children[0].children[0].value.substr(1))
                if(child.children[0].children[0].value.toLowerCase().includes('child')){
                    childNum += parseInt(child.children[0].children[2].value)
                }
                else if(child.children[0].children[0].value.toLowerCase().includes('adult')){
                    adultNum += parseInt(child.children[0].children[2].value)
                }
            });
            this.$emit('childToParent', adultNum, childNum)

            document.getElementById("subtotal").value = '$' + globalSubtotal.toFixed(2).toString()
            document.getElementById("tax").value = '$' + (0.098 * globalSubtotal).toFixed(2).toString()
            document.getElementById("total").value = '$' + (1.098 * globalSubtotal).toFixed(2).toString()
         }
     }
}
</script>

<style>

.readonly{
    border: none;
    background-color: lightgrey;
    padding: 0;
    margin: 0;
}
</style>