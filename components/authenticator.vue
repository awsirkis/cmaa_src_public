<template>
    <div id="login">
        <div id="login-body" v-if="state == 0">
            <h1 class="login-header">Login</h1>
            <input class="form-control login-form" type="text" placeholder="Username" v-model="loginform.username" required>
            <input class="form-control login-form" type="password" placeholder="Password" v-model="loginform.password" required>
            <p class="error" v-if="no_user">Username or Password Incorrect</p>
            <div id="login-footer" class="login-form">
                <small>Forgot your password? <span style="color: lightblue" @click.native="state = 2.1">Reset Here</span></small>
                <button v-on:click="login()"  class="btn btn-danger">Log In</button>
            </div>
        </div>
        <div id="reset-body" v-else-if="state == 1">
            <h1 class="login-header">Reset One-Time Password</h1>
            <input class="form-control login-form" type="text" placeholder="New Password" v-model="firsttimeform.password" required>
            <input class="form-control login-form" type="password" placeholder="Confirm Password" v-model="firsttimeform.confirm" required>
            <p class="error" v-if="!length">❌ Password must be at least 12 characters long</p>
            <p class="valid" v-else>✔ Password must be at least 12 characters long</p>
            <p class="error" v-if="!lowercase">❌ Password must contain a lowercase letter [a-z]</p>
            <p class="valid" v-else>✔ Password must contain a lowercase letter [a-z]</p>
            <p class="error" v-if="!uppercase">❌ Password must contain an uppercase letter [A-Z]</p>
            <p class="valid" v-else>✔ Password must contain an uppercase letter [A-Z]</p>
            <p class="error" v-if="!number">❌ Password must contain a number [0-9]</p>
            <p class="valid" v-else>✔ Password must contain a number [0-9]</p>
            <p class="error" v-if="!special">❌ Password must contain a special character [`,~,!,@,#,$,%,^, etc]</p>
            <p class="valid" v-else>✔ Password must contain a special character [`,~,!,@,#,$,%,^, etc]</p>
            <input class="form-control login-form" type="phone" placeholder="Phone Number (Optional)" v-model="firsttimeform.phone" required>
            <div id="reset-footer" class="login-form">
                <button @click="reset"  class="btn btn-danger">Reset</button>
            </div>
        </div>
        <!-- MFA is disabled for this project-->
        <!--<div id="mfa-body">
          <h1 class="login-header">Multifactor Authentication</h1>
        </div>
        <div id="mfa-setup">
          <h1 class="login-header">Multifactor Authentication Setup</h1>

        </div>-->
        <div id="forgot-password" v-else>
          <div id="recovery-step-one" v-if="state == 2.1">
            <h1 class="login-header">Password Recovery</h1>
            <p>Enter your email address (or phone number if enabled) to receive your account recovery code.</p>
            <input type="email" class="form-control login-form" placeholder="Email" v-model="resetStepOne.email" required>
            <input type="phone" class='form-control login-form' placeholder="Phone" v-model="resetStepOne.phone">
            <div class="login-form">
              <button  class="btn btn-danger">Send Reset Email</button>
            </div>
          </div>
          <div id="recoverey-step-two" v-else-if="state == 2.2">
            <h1 class=login-header>Enter Verification Code</h1>
            <input type="text" class='form-control login-form' placeholder="Code" v-model="resetStepTwo.code" required>
            <div class="login-form">
              <button  class="btn btn-danger">Verify Code</button>
            </div>
          </div>
          <div id="recovery-step-three" v-else-if="state == 2.3">
            <h1 class="login-header">Password Reset</h1>
            <input type="text" class="form-control login-form" @change="alert('x')" placeholder="New Password" v-model="resetStepThree.password" required>
            <p> password is {{resetStepThree.password}}</p>
            <input type="password" class="form-control login-form" placeholder="Confirm Password" v-model="resetStepThree.confirm" required>
            <p class="error" v-if="!match">❌ Passwords must match</p>
            <p class="valid" v-else>✔ Passwords must match</p>
            <p class="error" v-if="!length">❌ Password must be at least 12 characters long</p>
            <p class="valid" v-else>✔ Password must be at least 12 characters long</p>
            <p class="error" v-if="!lowercase">❌ Password must contain a lowercase letter [a-z]</p>
            <p class="valid" v-else>✔ Password must contain a lowercase letter [a-z]</p>
            <p class="error" v-if="!uppercase">❌ Password must contain an uppercase letter [A-Z]</p>
            <p class="valid" v-else>✔ Password must contain an uppercase letter [A-Z]</p>
            <p class="error" v-if="!number">❌ Password must contain a number [0-9]</p>
            <p class="valid" v-else>✔ Password must contain a number [0-9]</p>
            <p class="error" v-if="!special">❌ Password must contain a special character [`,~,!,@,#,$,%,^, etc]</p>
            <p class="valid" v-else>✔ Password must contain a special character [`,~,!,@,#,$,%,^, etc]</p>
            
            <div class="login-form">
              <button  class="btn btn-danger">Change Password</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

import { Auth } from 'aws-amplify'
export default {
    
    name:'authenticator',
    data(){
      return{
        loginform:{
          username: '',
          password: ''
        },
        firsttimeform:{
          password: '',
          confirm:'',
          phone:''
        },
        resetStepOne:{
          email:'',
          phone:''
        },
        resetStepTwo:{
          code:''
        },
        resetStepThree:{
          password: '',
          confirm:''
        },
        state: 0,
        no_user: false
      }
    },
    computed:{
      match: function(){
        return this.resetStepThree.password == this.resetStepThree.confirm
      },
      length: function(){
        return this.resetStepThree.password.length >= 12
      },
      lowercase: function(){
        return /[a-z]/.test(this.resetStepThree.password)
      },
      uppercase: function(){
        return /[A-Z]/.test(this.resetStepThree.password)
      },
      number: function(){
        return /[0-9]/.test(this.resetStepThree.password)
      },
      special: function(){
        return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.resetStepThree.password)
      },
      valid: function(){
        return this.match && this.length && this.lowercase && this.uppercase && this.number && this.special
      }
    },
    methods:{
      passwordRecover: function(){

      },
      resetPassword: function(){

      },
      login: function(){
        console.log(this.loginform)
      }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100%;
  padding: 15px;
}

.error {
  color: red;
}

.valid {
  color: green
}

#login-body, #reset-body, #change-body, #rest-nody, #mfa-body, #mfa-setup, #forgot-password{
    background-color: white;
    min-width: 100%;
    padding:15px;
}

#login{
    min-width: 100%;
    color: black;
}

.login-header{
    border: none;
}

#login-fail{
  color: red;
}

.login-form, .recovery-footer{
  margin-top: 15px;
}


</style>