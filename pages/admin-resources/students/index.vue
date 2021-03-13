<template>
  <div>
    
    <main>
      <article>
        <h1>Manage Students</h1>
        <nuxt-link to="/admin-resources/students/" v-if="$route.query.username!=null"  class="btn btn-secondary"  >🞀  Back</nuxt-link>
        <div class="container-fluid" v-else>
          <div class="row justify-content-center text-center"> 
            <nuxt-link class="btn btn-secondary" to='/admin-resources/students/create'>Add Student</nuxt-link>
          </div>
        </div>
      </article>
      <ul class="nav nav-pills nav-fill" style="background-color: lightgrey" v-if="$route.query.username==null">
            <li class="nav-item">
                <a class="nav-link active" href="#" v-if="sort === null">All Items</a>
                <a class="nav-link" href="#"  @click="sort = null" v-else>All Items</a>
            </li>
            <li class="nav-item" >
                <a class="nav-link active" href="#" @click="sort = 'namedesc'" v-if="sort == 'nameasc'">Name ᐃ</a>
                <a class="nav-link active" href="#" @click="sort = 'nameasc'" v-else-if="sort == 'namedesc'">Name ᐁ</a>
                <a class="nav-link" href="#" @click="sort = 'nameasc'" v-else>Name</a>  
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#" @click="sort = 'krankasc'" v-if="sort == 'krankdesc'">Karate Rank ᐁ</a>
                <a class="nav-link active" href="#" @click="sort = 'krankdesc'" v-else-if="sort == 'krankasc'">Karate Rank ᐃ</a>
                <a class="nav-link" href="#"  @click="sort = 'krankasc'" v-else>Karate Rank</a>  
            </li>
            <li class="nav-item" >
                <a class="nav-link active" href="#" @click="sort = 'prankasc'" v-if="sort == 'prankdesc'">Parra Rank ᐁ</a>
                <a class="nav-link active" href="#" @click="sort = 'prankdesc'" v-else-if="sort == 'prankasc'">Parra Rank ᐃ</a>
                <a class="nav-link" href="#" @click="sort = 'prankdesc'" v-else>Parra Rank</a>  
            </li>
            <li class="nav-item" >
                <a class="nav-link active" href="#" @click="sort = 'roledesc'" v-if="sort == 'roleasc'">Role ᐁ</a>
                <a class="nav-link active" href="#" @click="sort = 'roleasc'" v-else-if="sort == 'roledesc'">Role ᐃ</a>
                <a class="nav-link" href="#" @click="sort = 'roleasc'" v-else>Role</a>  
            </li>
            <li class="nav-item" >
                <a class="nav-link active" href="#" @click="sort = 'agedesc'" v-if="sort == 'ageasc'">Age ᐃ</a>
                <a class="nav-link active" href="#" @click="sort = 'ageasc'" v-else-if="sort == 'agedesc'">Age ᐁ</a>
                <a class="nav-link" href="#" @click="sort = 'ageasc'" v-else>Age</a>  
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" @click="sort = null" v-if="sort=='kain'">Karate Instructor</a>
              <a class="nav-link" href="#" @click="sort='kain'" v-else>Karate Instructor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" @click="sort = null" v-if="sort=='koin'">Kobudo Instructor</a>
              <a class="nav-link" href="#" @click="sort='koin'" v-else>Kobudo Instructor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" @click="sort = null" v-if="sort=='tuin'">Tuite Instructor</a>
              <a class="nav-link" href="#" @click="sort='tuin'" v-else>Tuite Instructor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" @click="sort = null" v-if="sort=='lein'">Law Enforcement Instructor</a>
              <a class="nav-link" href="#" @click="sort='lein'" v-else>Law Enforcement Instructor</a>
            </li>
            <li class="nav-item" >
                <a class="nav-link active" href="#" @click="sort = 'painac'" v-if="sort == 'paindesc'">Parra Instructor ᐁ</a>
                <a class="nav-link active" href="#" @click="sort = 'paindesc'" v-else-if="sort == 'painasc'">Parra Instructor ᐃ</a>
                <a class="nav-link" href="#" @click="sort = 'painasc'" v-else>Parra Instructor</a>  
            </li>
            
        </ul>
      <div class="container-fluid" v-if="sortedStudents.length">
          <div class="row justify-content-center text-center" v-if="$route.query.username == null"> 
              <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-2" v-for="(item, index) in sortedStudents" :key="`${index}-card`" >
                <nuxt-link :to="`/admin-resources/students/?username=${item.username}`">
                  <icard :NAME="item.name" :SRC="item.image.match('data') ? item.image : 'default'"/>
                </nuxt-link>
              </div>
          </div>
          <div class="row" v-else>
              <div class="col-12" v-for="item in students" :key="`${item.username}-student`" v-show="item.username === $route.query.username">
                <student :USER="item"></student>
              </div>
            </div>
        </div>
        <div class="container fluid" v-else>
          <div class="row justify-content-center">
            <div class="loader"></div>

          </div>

        </div>
    </main>
    
  </div>
</template>

<script>
import instructor from '~/components/instructor.vue'
    import icard from '~/components/studentcard.vue'
    import student from '~/components/student2.vue'
export default {
    
  components: {
    instructor,
    icard,
    student
  },
  data() {
    return{
      students:[],
      selectedStudent:this.$route.query.username,
      sort: null
    }
  },
  computed:{
    sortedStudents(){
      switch(this.sort){
        case 'nameasc':
                this.students.sort(this.sortNameAsc)
                break
        case 'namedesc':
                this.students.sort(this.sortNameDesc)
                break;
        case 'ageasc':
                this.students.sort(this.sortBdayAsc)
                break
        case 'agedesc':
                this.students.sort(this.sortBdayDesc)
                break
        case 'prankasc':
                this.students.sort(this.sortPrankAsc)
                break
        case 'prankdesc':
                this.students.sort(this.sortPrankDesc)
                break
        case 'krankasc':
                this.students.sort(this.sortKrankAsc)
                break
        case 'krankdesc':
                this.students.sort(this.sortKrankDesc)
                break
        case 'koin':
                return this.students.filter(obj => obj.instructorKobudo)
                break
        case 'kain':
                return this.students.filter(obj => obj.instructorKarate)
                break
        case 'tuin':
                return this.students.filter(obj => obj.instructorTuite)
                break
        case 'lein':
                return this.students.filter(obj => obj.instructorLaw)
                break
        case 'painasc':
                this.students.sort(this.sortPainAsc)
                break
        case 'paindesc':
                this.students.sort(this.sortPainDesc)
                break
        case 'roleasc':
          this.students.sort(this.sortRoleAsc)
          break
        case 'roledesc':
          this.students.sort(this.sortRoleDesc)
          break
      }
      return this.students
    }
  },
  methods:{
    selectStudent: function(index){
      this.selectedStudent = index
      
    },
    deselectStudent: function(){
      this.selectedStudent = null
    },
    sortNameAsc(a, b){
      if(a.name < b.name){
        return -1
      }
      else if(a.name > b.name){
        return 1
      }
      else{
        return 0
      }
    },
    sortNameDesc(a, b){
      if(a.name < b.name){
        return 1
      }
      else if(a.name > b.name){
        return -1
      }
      else{
        return 0
      }
    },
    sortBdayAsc(a, b){
      if(a.birthdate < b.birthdate){
        return -1
      }
      else if(a.birthdate > b.birthdate){
        return 1
      }
      else{
        return 0
      }
    },
    sortBdayDesc(a, b){
      if(a.birthdate < b.birthdate){
        return 1
      }
      else if(a.birthdate > b.birthdate){
        return -1
      }
      else{
        return 0
      }
    },
    sortPrankAsc(a, b){
      if(a.parra_rank.length > b.parra_rank.length){
        return 1
      }
      else if(a.parra_rank.length < b.parra_rank.length){
        return -1
      }
      else if(Date(a.parra_rank[a.parra_rank.length]) < Date(b.parra_rank[a.parra_rank.length])){
        return 1
      }
      else if(Date(a.parra_rank[a.parra_rank.length]) > Date(b.parra_rank[a.parra_rank.length])){
        return -1
      }
      else{
        return 0
      }
    },
    sortPrankDesc(a, b){
      if(a.parra_rank.length > b.parra_rank.length){
        return -1
      }
      else if(a.parra_rank.length < b.parra_rank.length){
        return 1
      }
      else if(Date(a.parra_rank[a.parra_rank.length]) < Date(b.parra_rank[a.parra_rank.length])){
        return -1
      }
      else if(Date(a.parra_rank[a.parra_rank.length]) > Date(b.parra_rank[a.parra_rank.length])){
        return 1
      }
      else{
        return 0
      }
    },
    sortKrankAsc(a, b){
      // if a has more ranks
      if(a.karate_rank.length > b.karate_rank.length){
        return 1
      }
      // if b has more ranks
      else if(a.karate_rank.length < b.karate_rank.length){
        return -1
      }
      // if a is earlier
      else if(Date(a.karate_rank[a.karate_rank.length]) < Date(b.karate_rank[a.karate_rank.length])){
        return 1
      }
      // if b is earlier
      else if(Date(a.karate_rank[a.karate_rank.length]) > Date(b.karate_rank[a.karate_rank.length])){
        return -1
      }
      else{
        return 0
      }
    },
    sortKrankDesc(a, b){
      // if a has more ranks
      if(a.karate_rank.length > b.karate_rank.length){
        return -1
      }
      // if b has more ranks
      else if(a.karate_rank.length < b.karate_rank.length){
        return 1
      }
      // if a is earlier
      else if(Date(a.karate_rank[a.karate_rank.length]) < Date(b.karate_rank[a.karate_rank.length])){
        return -1
      }
      // if b is earlier
      else if(Date(a.karate_rank[a.karate_rank.length]) > Date(b.karate_rank[a.karate_rank.length])){
        return 1
      }
      else{
        return 0
      }
    },
    sortPainAsc(a, b){
      if(a.instructorParra.length < b.instructorParra.length){
        return -1
      }
      else if(a.instructorParra.length > b.instructorParra.length){
        return 1
      }
      else if(Date(a.instructorParra[a.instructorParra.length]) < Date(b.instructorParra[a.instructorParra.length])){
        return -1
      }
      else if(Date(a.instructorParra[a.instructorParra.length]) > Date(b.instructorParra[a.instructorParra.length])){
        return 1
      }
      else{
        return 0
      }
    },
    sortPainDesc(a, b){
      if(a.instructorParra.length < b.instructorParra.length){
        return 1
      }
      else if(a.instructorParra.length > b.instructorParra.length){
        return -1
      }
      else if(Date(a.instructorParra[a.instructorParra.length]) < Date(b.instructorParra[a.instructorParra.length])){
        return 1
      }
      else if(Date(a.instructorParra[a.instructorParra.length]) > Date(b.instructorParra[a.instructorParra.length])){
        return -1
      }
      else{
        return 0
      }
    },
    sortRoleAsc(a, b){
      if(a.role > b.role){
        return -1
      }
      else if(a.role < b.role){
        return 1
      }
      else{
        return 0
      }
    },
    sortRoleDesc(a, b){
      if(a.role > b.role){
        return 1
      }
      else if(a.role < b.role){
        return -1
      }
      else{
        return 0
      }
    }
    
  },
  async mounted(){
    if(!this.$store.getters.isAuth && this.$store.getters.role < 4){
      this.$router.push('/')
    }
    const fetch = require('node-fetch')
        const params={
            action:'list',
            username: this.$store.getters.username,
            password: this.$store.getters.password,

        }
        const res = await fetch('/.netlify/functions/students', {method:'POST', body: JSON.stringify(params)})
        const users = await res.json()
        this.students = users
        console.log(users)
  },
  head () {
    return {
      title: 'Students | CMAA',
      meta: [
        { name: 'description', content: 'List of Students' },
        {
          name: 'keywords', content: 'karate, okinawan, Everett, tuite, kali, silat, JKD, muay thai, WA, washington, washington state, snohomish, judo, BJJ,jiujitsu,jiu-jitsu, brazilian,jiu,jitsu, aikido, aikijitsu, iaido, iaijitsu, tae,kwan,do, taekwando, krav,maga, boxing, filipino,boxing, law enforcement, military, martial, arts'
        },
        {
            charset: 'UTF-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        }
      ],
    
    }
  }
}
</script>

<style>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid rgb(241, 94, 94); /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>