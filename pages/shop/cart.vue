<template>
<div>
    <main>
      <h1>Cart</h1>
      <form @submit.prevent="submit" style="padding:15px">
        <div v-if="$route.query.status == 200" class="content-center text-center" style="color: darkgreen">
          <p>Thank you for your purchase. An email containing your total has been sent to the provided email, and an invoice via Square will be arriving shortly after.</p>
          <p>For the duration of COVID-19 restrictions, you can schedule a time with Sensei Rick to pick up your items from the dojo once they are ready.</p>
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
        <div id="shoppinglist">
          <div v-for="(item,index) in $store.getters.cart" :key="index">
            <cartitem :NAME="item.name" :QTY="parseInt(item.qty)" :PRICE="item.price"  :SRC="item.src" v-if="item.qty > 0" />
          </div>
        </div>
        <div class="money_values row justify-content-end">
          <table class="col-md-5 col-sm-12 row">
              <tbody>
                  <tr>
                      <td class="text-right">Subtotal</td>
                      <td name="subtotal" class='number'>${{subtotal}}</td>
                      <input name="subtotal" hidden readonly :value="subtotal">
                  </tr>
                  <tr>
                      <td class="text-right">Tax (9.8%)</td>
                      <td name="tax" class='number'>${{tax}}</td>
                      <input name="tax" hidden readonly :value="tax">
                  </tr>
                  <tr>
                      <td class="text-right total">Total</td>
                      <td name="total" class='total number'>${{total}}</td>
                      <input name="total" hidden readonly :value="total">
                  </tr>
              </tbody>
          </table>
        </div>
        <div >
          <div class="form-group">
              <label for="name">Name</label>
              <input type="text" name="name" class="form-control"  required>
          </div>
          <div class="form-row">
              <div class="col-md-6 form-group ">
                  <label for="creditcard">Credit Card #</label>
                  <input type="text" pattern="[0-9].{12,19}" class="form-control" v-model="form.cc_number" name="cc_number" autocomplete="cc-number" required>
              </div>
              <div class="col-6 col-md-2 form-group ">
                  <label for="cvv">CVV</label>
                  <input type="text" name="cvv" autocomplete="cc-csc" class="form-control" v-model="form.cvv" pattern="[0-9]{3}" required>
              </div>
              <div class="col-3 col-md-2 form-group ">
                  <label for="exp_month">Exp. Month</label>
                  <input type="text" name="exp_month" class="form-control" pattern="[0-9]{2}" v-model="form.exp_month" autocomplete="cc-exp-month" required>
              </div>
              <div class="col-3 col-md-2 form-group ">
                  <label for="exp_year">Exp. Year</label>
                  <input type="text" name="exp_year" class="form-control" v-model="form.exp_year" pattern="[0-9]{2}" autocomplete="cc-exp-year" required>
              </div>
          </div>
          <div class="form-row">
              <div class="col-md-6 form-group ">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" name="_replyto" required>
              </div>
              <div class="col-md-6 form-group ">
                  <label for="inputPassword4">Phone #</label>
                  <input type="phone" class="form-control" id="inputPassword4" name="phone" required>
              </div>
          </div>
              <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress" name="address_1" v-model="form.address_1" required>
              </div>
              <div class="form-group">
                  <label for="inputAddress2">Address Line 2</label>
                  <input type="text" class="form-control" id="inputAddress2" v-model="form.address_2" name="address_2">
              </div>
              <div class="form-row">
                  <div class="col-12 col-md-6 form-group ">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" v-model="form.city" name="city" required>
                  </div>
                  <div class="col-4 col-md-2 form-group ">
                  <label for="inputState">State</label>
                  <input type="text" class="form-control" id="inputState" v-model="form.state" name="state" required>
                  </div>
                  <div class="col-8 col-md-4 form-group ">
                      <label for="inputZip">Zip</label>
                      <input type="text" class="form-control" id="inputZip" v-model="form.zip" name="zip" required>
                  </div>
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

import cartitem from '~/components/cartitem.vue'
export default{
    components:{
        cartitem
    },
  head () {
    return {
      title: 'Cart | CMAA',
      meta: [
        { name: 'description', content: 'CMAA Shopping Cart' },
        
      ],
    
    }
  },
    data(){
        return{
            form:{
              cc_number:'',
              cvv:'',
              exp_month:'',
              exp_year:'',
              address_1:'',
              address_2:'',
              city:'',
              state:'',
              zip:''
            }
        }
    },
    methods:{
      async submit(){
        let params ={
          name: this.name,
          email: this.email,
          subtotal: this.subtotal,
          tax: this.tax,
          total: this.total,
          cart: this.cart,
          cc_number: this.form.cc_number,
          cvv: this.form.cvv,
          exp_month: this.form.exp_month,
          exp_year: this.form.exp_year,
          phone: this.phone,
          address_1: this.form.address_1,
          address_2: this.form.address_2,
          city: this.form.city,
          state: this.form.state,
          zip: this.form.zip
        }
        const res = await fetch('/.netlify/functions/shop', {method:'POST', body:JSON.stringify(params)})
        if(res.status == 200){
          await this.$store.dispatch('clearCart')
        }
        //await this.$recaptcha.reset()
      this.$router.push({path: this.$router.path, query:{status:res.status}})
      },
   success: function(){
     this.valid_recaptcha = true
    },
   error: function(){
     this.valid_recaptcha = false
    },
   expired: function(){
     this.valid_recaptcha = false
    }

    },
    computed:{
      cart: function() {
        let temp = this.$store.getters.cart
        let r = []
        for(let i in temp){
          r.push({id: temp[i].id, index: temp[i].index, qty: temp[i].qty})
        }
        return JSON.stringify(r, null, 1)
      },
      subtotal: function(){
            let n = 0;
            this.$store.getters.cart.forEach(c =>{
                n += parseInt(c.qty * c.price)
            })
            return n.toFixed(2)
        },
        tax: function(){
            return (0.098 * this.subtotal).toFixed(2)
        },
        total: function(){
            return (parseFloat(this.tax) + parseFloat(this.subtotal)).toFixed(2)
        },
        name: function(){
          return this.$store.getters.isAuth ? this.$store.getters.name : ''
        },
        email: function(){
          return this.$store.getters.isAuth ? this.$store.getters.email : ''
        },
        phone: function(){
          return this.$store.getters.isAuth ? this.$store.getters.phone : ''
        }
    }
}
</script>

 <style>
form{
    width: 100%;
    background-color: lightgrey;
    color: black;
    border-radius:15px;
}
#shoppinglist{
    width:100%;
}
.number{
    padding-left: 15px;
}
</style>
