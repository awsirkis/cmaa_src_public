<template>
<div>
    <form method="POST" action="/api/contact" @submit="submit">
        <input type="email" class='form-control' v-model="form.email" name="email" placeholder="email">
        <input type="text" class='form-control' v-model="form.name" name="name" placeholder="name">
        <input type="text" class='form-control' v-model="form.question" name="question" placeholder="question">
        <!--<vue-recaptcha sitekey="6LdEUskZAAAAAOBVEaPY5dNRM3icaI_k_Ve0b51t"></vue-recaptcha>-->
        <recaptcha 
        @error="error"
        @success="success"
        @expired="expired"
        />
        <input type="text" class="form-control" hidden v-model="form.recaptcha" name="recaptcha">
        <button type="submit" class="btn btn-danger">Submit</button>
    </form>
</div>

</template>
<script>
export default {
    
    data(){
        return{
            form:{
                email: '',
                name: '',
                question: '',
                recaptcha:''
            }
        }
    },
    methods: {
        async submit() {
            try {
                const token = await this.$recaptcha.getResponse()
                await this.$recaptcha.reset()
                return true
            } catch (error) {
            }
        },
        success: function(){
            console.log("success")
            this.form.recaptcha="success"
        },
        error: function(){
            console.log("error")
            this.form.recaptcha="error"
        },
        expired: function(){
            console.log("expired")
            this.form.recaptcha="expired"
        }
    },
    async mounted(){
        if(this.$store.getters.role < 4){
            this.$router.push('/')
        }
        await this.$recaptcha.init()
        //document.getElementById("g-recaptcha-response").name="googlerecaptcha"
        
        //document.getElementById("g-recaptcha-response").id="googlerecaptcha"
    },
    head () {
    return {
      title: 'Test | CMAA',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { name: 'description', content: 'Cascade Martial Arts is an Everett-based dojo of the OSMKKF that specializes in Karate, Kali/Silat, JKD, Throwing, and Muay Thai' },
        
      ]
    }
  }
}
</script>

<style>
#login-body{
    background-color: white;
    min-width: 100%;
    padding:15px;
}

#login{
    min-width: 100%;
    color: black;
}

#login-header{
    border: none;
}
</style>