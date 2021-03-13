<template>
    <div class="instructor">
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <img alt="image" class="headshot col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4" :src="require(`~/assets/img/${SRC}`)" style="height:25%">
            <div class="row col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
              <article class="rank col-12" v-if="RANK">
                  <h3 class="instructor-label">Rank</h3>
                  <p v-for="item in RANK" v-bind:key="item">{{item}}</p>
              </article>
              <article class="exp col-12" v-if="EXP">
                  <h3  class="instructor-label">Experience</h3>
                  <p v-for="item in EXP" v-bind:key="item">{{item}}</p>
              </article>
              <article class="bio col-12" v-if="BIO">
                  <h3 class="instructor-label">Bio</h3>
                  <p v-for="item in BIO" v-bind:key="item">{{item}}</p>
              </article>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
  name: 'Article',
  props: {
    NAME: {
      type: String,
      default() {
        return null
      }
    },
    RANK: {
      type: Array,
      default() {
        return null
      }
    },
    EXP: {
      type: Array,
      default() {
        return null
      }
    },
    SRC:{
        type: String,
        default:'osmkkf_logo.png'
    },
    BIO:{
    type: Array,
      default() {
        return null
      }
    }
  }
}
</script>

<style>
.instructor {
    width: 100%;
}

.instructor-label{
  width: 100%;
  border-bottom: 1px lightgrey solid !important;
  font-size: 1.25rem;
}

.instructor h3{
  width: 100%;
  border-bottom: 3px lightgrey solid;
  font-size: 1.5rem;
}
.instructor-body{
  width: auto;
  float: right;
}


.instructor .rank, .instructor .exp{
  width: 70%;
  display: inline-block;
  position: relative;
}

.instructor .bio{
  width: 100%;
}
</style>