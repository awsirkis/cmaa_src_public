<template>
      <div class="card">
          <img alt="image" :src="src" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{NAME}}</h5>
          </div>
      </div>
</template>

<script>
export default {
    
  name: 'studentcard',
  props: {
    NAME: {
      type: String,
      default() {
        return null
      }
    },
    SRC:{
      type: String,
      default: null
    }
  },
  computed:{
    src: function(){
        if(this.SRC == 'default'){
          return process.env.defaultImage
        }
        return this.SRC;
        
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