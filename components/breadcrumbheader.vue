<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item" v-for="item in ROUTES" v-bind:key="item">
                    <nuxt-link :to="`${item.Route}`">{{item.Name}}</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ACTIVE.Name}}</li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default{
 mounted(){
     console.log("mounting bch")
     let route = this.$route.fullPath.split('/')
     let shortroute = ""
     let routes=[]
     for(let i = 0; i < route.length; ++i){
        for(let j = 0; j <= i; ++j){
            shortroute.concat(shortroute, "/", route[j])
        }
         routes.push({Route: shortroute, Name: route[i]})
         shortroute = ""
     }
     this.ROUTES = routes
     this.ACTIVE = this.ROUTES.shift()
     console.log(this.ROUTES)
 },
 data(){
     ROUTES,
     ACTIVE
 }
}    
</script>