<template>
<!-- Card 2 -->
    <div class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 card-container">
      <div class="card-flip" :class="[flipped ? 'flipped' : '']">
        <!-- Card 2 Front -->
        <div class="card front" @click="flip">
          <img alt="image" :src="SRC" class="card-img-top img-fluid">
          <div class="card-block">
            <h4 class="card-title">{{Name}}</h4>
            <p class="card-text"></p>
          </div>
        </div>
        <!-- End Card 2 Front -->

        <!-- Card 2 Back -->
        <div class="card back">
          <div class="card-header">
            <span @click="flip" style="float:left;font-size:20px" class="flipper">&#11119;</span>
          </div>
          <div class="card-block">
            <h4 class="card-title">{{Name}}</h4>
            <p class="card-text">{{DESCRIPTION}}</p>
            <select class="form-control" style="margin-bottom: 15px" v-model="size">
              <option selected hidden>Select Size...</option>
              <option v-for="(item, index) in SIZES" :key="index" :value="index">{{item}} <span style="justify: right">${{PRICE[index]}}</span></option>
            </select>
            <input type="number" class="form-control" v-model="qty" style="width:100%" min='1' name="qty">
            <button class="btn btn-secondary" style="margin-top: 15px" @click="addToCart">Add To Cart</button>
          </div>
        </div>
        <!-- End Card 2 Back -->
      </div>
    </div>
    <!-- End Card 2 -->
</template>

<script>
export default {
    
    name:'itemcard',
    data(){
        return{
            flipped: false,
            qty: 0,
            size: 0
        }
    },
    props:{
        Name:{
            type:String,
            default: ""
        }
    },
    computed:{
        ITEM: function(){
            const l = this
            return this.$store.getters.store.filter(function(item){return item.name=== l.Name})
        },
      PRICE: function(){
        return this.ITEM[0].prices
      },
      DESCRIPTION: function(){
        return this.ITEM[0].description
      },
      SIZES: function(){
        return this.ITEM[0].sizes
      },
      SRC: function(){
        if(this.ITEM[0].src == ""){
          return process.env.defaultImage
        }
        return this.ITEM[0].src;
        
      }

    },
    methods:{
        flip: function(){
            this.flipped = !this.flipped
        },
        addToCart: function(){
          this.$store.dispatch('addToCart',{name: this.Name, qty: this.qty, index: this.size})
        }
    }
}
</script>

<style>

.card {
  margin: 10px 10px;
  background-color: #e8e8e8;
  color: black
}

.back:hover{
  background-color: #e8e8e8;
}

/* Flip Cards CSS */
.card-container {
  display: grid;
  perspective: 700px;
}

.card-flip {
  display: grid;
  grid-template: 1fr / 1fr;
  grid-template-areas: "frontAndBack";
  transform-style: preserve-3d;
  transition: all 0.7s ease;
}

.card-flip div {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.front {
  grid-area: frontAndBack;
}
.front:hover{
  cursor:pointer;
}

.back {
  grid-area: frontAndBack;
  transform: rotateY(-180deg);
}

.flipped {
  transform: rotateY(180deg);
}
.flipper:hover{
  cursor:pointer
}

</style>