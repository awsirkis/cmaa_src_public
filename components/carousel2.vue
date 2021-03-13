<template>
<div class="carousel-wrapper">
    <div :id="`carousel-${ID}`" class="carousel slide" data-ride="carousel" v-if="next">
      <!-- Indicators -->
      <ol class="carousel-indicators" v-if="next.length > 0">
        <li :data-target="`#carousel-${ID}`" data-slide-to="0" class="active"></li>
        <li :data-target="`#carousel-${ID}`" v-for="(image, index) in next" :key="image" :data-slide-to="index + 1"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="carousel-item active" v-if="first">
          <img alt="image" :src="`${first}`"  style="width:100%;">
          <div class="carousel-caption d-none d-md-block">
            <h5 v-if="first_caption_title">{{first_caption_title}}</h5>
            <p v-if="first_caption">{{first_caption}}</p>
          </div>
        </div>
        <div class="carousel-item" v-for="(image,index) in next" :key="image">
          <img alt="image" :src="`${image}`"  style="width:100%;">
          <div class="carousel-caption d-none d-md-block">
            <h5 v-if="C_TITLE">{{C_TITLE[index]}}</h5>
            <p v-f="CAPTIONS">{{CAPTIONS[index]}}</p>
          </div>
        </div>
        
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" :href="`#carousel-${ID}`" role="button" data-slide="prev" v-if="next.length > 0">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" :href="`#carousel-${ID}`" role="button" data-slide="next" v-if="next.length > 0">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      default: null
    },
    ID:{
      type: String,
      default: "0"
    },
    C_TITLE:{
      type: Array,
      default: null
    },
    CAPTIONS:{
      type: Array,
      default: null
    }
  },
  data(){
    return{
      first: ''
    }
  },
  computed:{
    first_caption_title: function(){
      return this.C_TITLE ? this.C_TITLE.shift() : null
    },
    first_caption: function(){
      return this.CAPTIONS ? this.CAPTIONS.shift() : null
    },
    next: function(){
      var arr = []
      let j = ''
      while(j = this.images.shift()){
        try{
          arr.push(require('~/assets/img/' + j).toString())
        }catch(err){
          arr.push(require('~/assets/img/osmkkf_logo.png').toString())
        }
      }
      this.first = arr.shift()
      return arr
    }
  }
}
</script>

<style>
.carousel-wrapper{
  width: 100%;
  margin-right: 20%;
  margin-left: 20%;
}
.carousel{
  width: 60%;
}
</style>