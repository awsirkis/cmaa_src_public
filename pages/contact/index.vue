<template>
  <div>
    
    <main>
      <h1>
        Contact Us
      </h1>
      <p>Got a question? Ask us here, and we will get back to you with an answer!</p>
      <form @submit.prevent="submit" style="padding:15px">
        <div v-if="$route.query.status == 200" class="content-center text-center" style="color: darkgreen">
          <p>Thank you for contacting us! A representative will respond promptly.</p>
          <p>In the meantime, check out our <nuxt-link to="/programs/">Programs</nuxt-link> or some nice <nuxt-link to="/contact/resources">Resources</nuxt-link>.</p>
        </div>
        <div v-else>
          <div v-if="$route.query.status==403" class="content-center text-center" style="color: red">
            <p>Invalid Recaptcha. Please try again.</p>
          </div>
          <div v-else-if="$route.query.status==400" class="content-center text-center" style="color: red">
            <p>Something went wrong. Please try again.</p>
          </div>
          <div v-else-if="$route.query.status==405" class="content-center text-center" style="color: red">
            <p>Request made with wrong method. You shouldn't see this unless you're hacking though. Please try again.</p>
          </div>
          <div v-else-if="$route.query.status==500" class="content-center text-center" style="color: red">
            <p>Something went wrong on our servers. Please try again later</p>
          </div>
          <div class="form-row">
            <div class="form-row col-md-6 col-xs-12">
              <label for="name">Name <span color="red">*</span></label>
              <input type="text" class="form-control" name="name" v-model="form.name" required>
            </div>
            <div class="form-row col-md-6 col-xs-12">
              <label for="email">Email <span color="red">*</span></label>
              <input type="email" class="form-control" name="email" v-model="form.email" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="question">Question <span color="red">*</span></label>
              <textarea class="form-control" id="question" name="question" v-model="form.question" rows="5" required></textarea>
            </div>
          </div>
          <div class="row justify-content-center" style="padding-top:15px">
              <button type="submit" class="btn btn-danger">Submit</button>
          </div>
        </div>
      </form>
    </main>
    
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
                recaptcha: false
            }
        }
    },
  head () {
    return {
      title: 'Contact | CMAA',
      meta: [
        { name: 'description', content: 'Contact  CMAA Representative' },
        
      ],
    }
  },
  async mounted(){
    // await this.$recaptcha.init()
  },
  methods:{
      async submit(){
        const fetch = require('node-fetch');
        //const token = await this.$recaptcha.getResponse()
        let params = {
                    name: this.form.name,
                    email: this.form.email,
                    question: this.form.question
                  }
        const res = await fetch('/.netlify/functions/contact', {method: 'POST', body: JSON.stringify(params)})
        //await this.$recaptcha.reset()
      this.$router.push({path: this.$router.path, query:{status:res.status}})
      }
  }
}
</script>

<style>
form{
 background-color:lightgrey;
 color:black;
 width:100%;
 border-radius:15px
}</style>
